export interface ChangeItem {
  text: string;
  commit?: { label: string; url: string };
}

export interface ChangeGroup {
  title: string;
  items: ChangeItem[];
}

export interface Release {
  version: string;
  url?: string;
  date?: string;
  groups: ChangeGroup[];
}

// Parse the conventional-changelog headings and bullets used in CHANGELOG.md.
// Render text through Astro rather than injecting Markdown as HTML.
export function parseChangelog(markdown: string): Release[] {
  const releases: Release[] = [];
  let release: Release | undefined;
  let group: ChangeGroup | undefined;
  let item: ChangeItem | undefined;

  for (const line of markdown.split(/\r?\n/)) {
    const version = line.match(/^##\s+(?:\[([^\]]+)\](?:\((https?:\/\/[^)]+)\))?|([^\s]+))(?:\s+\((\d{4}-\d{2}-\d{2})\))?\s*$/);
    if (version) {
      release = { version: version[1] ?? version[3], url: version[2], date: version[4], groups: [] };
      releases.push(release);
      group = undefined;
      item = undefined;
      continue;
    }
    if (!release) continue;

    const heading = line.match(/^###\s+(.+?)\s*$/);
    if (heading) {
      group = { title: heading[1], items: [] };
      release.groups.push(group);
      item = undefined;
      continue;
    }

    const bullet = line.match(/^\s*[*-]\s+(.+)$/);
    if (bullet) {
      if (!group) {
        group = { title: '更新', items: [] };
        release.groups.push(group);
      }
      const commit = bullet[1].match(/\s+\(\[([a-f\d]{7,40})\]\((https?:\/\/[^)]+)\)\)\s*$/i);
      item = {
        text: commit ? bullet[1].slice(0, commit.index).trim() : bullet[1].trim(),
        ...(commit ? { commit: { label: commit[1], url: commit[2] } } : {}),
      };
      group.items.push(item);
    } else if (item && /^\s+\S/.test(line)) {
      item.text += ` ${line.trim()}`;
    }
  }

  return releases;
}
