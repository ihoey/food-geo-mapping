import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { parseChangelog } from './changelog.ts';

test('keeps every local changelog item in its release and group', () => {
  const markdown = readFileSync(new URL('../../CHANGELOG.md', import.meta.url), 'utf8');
  const releases = parseChangelog(markdown);
  assert.deepEqual(releases.map(({ version, date }) => [version, date]), [
    ['2.1.0', '2026-09-24'], ['2.0.2', '2024-09-09'], ['2.0.1', '2024-04-18'],
    ['2.0.0', '2024-03-07'], ['1.3.5', '2024-01-02'], ['1.3.4', '2023-10-20'],
    ['1.3.3', '2023-03-03'], ['1.3.2', '2022-04-25'], ['1.3.1', '2022-01-24'],
    ['1.3.0', '2021-10-19'], ['1.2.3', '2021-07-26'], ['1.2.2', '2021-05-27'],
    ['1.2.1', '2020-09-07'], ['1.2.0', '2019-12-18'], ['1.1.0', '2019-09-28'],
    ['1.0.1', '2019-06-03'], ['1.0.0', '2019-05-31'],
  ]);
  assert.deepEqual(releases[0].groups.map(g => [g.title, g.items.length]), [
    ['页面与体验', 5], ['依赖与工程', 4],
  ]);
  assert.equal(releases.flatMap(r => r.groups).length, markdown.match(/^### /gm)?.length);
  assert.ok(releases.every(r => r.groups.length > 0 && r.groups.every(g => g.items.length > 0)));
  const items = releases.flatMap(r => r.groups.flatMap(g => g.items));
  assert.equal(items.length, markdown.match(/^\* /gm)?.length);
  assert.equal(items[0].text, '恢复小吃和水果分类路由，修复首页入口 404，并完善分类页的占位内容。');
  assert.equal(items[0].commit?.label, '9edf1c2');
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
