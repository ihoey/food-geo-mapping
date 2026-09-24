import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { parseChangelog } from './changelog.ts';

test('keeps every local changelog item in its release and group', () => {
  const markdown = readFileSync(new URL('../../CHANGELOG.md', import.meta.url), 'utf8');
  const releases = parseChangelog(markdown);
  assert.deepEqual(releases.map(({ version, date }) => [version, date]), [
    ['1.0.3', '2021-10-19'], ['1.0.2', '2019-09-25'], ['1.0.1', '2019-09-21'],
  ]);
  assert.deepEqual(releases.map(r => r.groups.map(g => [g.title, g.items.length])), [
    [['Bug Fixes', 2], ['Features', 7]], [['Features', 7]], [['Bug Fixes', 4], ['Features', 4]],
  ]);
  const items = releases.flatMap(r => r.groups.flatMap(g => g.items));
  assert.equal(items.length, markdown.match(/^\* /gm)?.length);
  assert.equal(items[0].text, '开发模式关闭 ssr 模式 && 取消严格版本号');
  assert.equal(items[0].commit?.label, '5a0bfee');
  assert.ok(items.every(item => item.commit?.url.startsWith('https://github.com/')));
});

test('supports multi-digit versions, CRLF, ungrouped bullets and wrapped text', () => {
  const releases = parseChangelog([
    '# Changelog', 'Ignored introduction',
    '## [12.10.30-beta.2](https://example.com/release) (2026-09-24)',
    '- 第一条', '  补充说明', '### Features', '* 第二条',
    '## [Unreleased]', '- 待发布',
  ].join('\r\n'));
  assert.equal(releases[0].version, '12.10.30-beta.2');
  assert.equal(releases[0].groups[0].items[0].text, '第一条 补充说明');
  assert.equal(releases[0].groups[1].items[0].text, '第二条');
  assert.equal(releases[1].version, 'Unreleased');
  assert.equal(releases[1].date, undefined);
  assert.equal(releases[1].groups[0].items[0].text, '待发布');
  assert.deepEqual(parseChangelog(''), []);
});
