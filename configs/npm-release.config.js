export default {
    branches: ['main'], // ggf. weitere Branches hinzufügen
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        // Hier wird der npm-Publishing-Schritt aktiviert:
        ['@semantic-release/npm', { npmPublish: true }],
        // Mit git werden geänderte Dateien (z. B. package.json und CHANGELOG.md) committed:
        ['@semantic-release/git', {
            assets: ['package.json', 'CHANGELOG.md'],
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }],
        // Optional: GitHub-Release (ohne zusätzliche Kommentare)
        ['@semantic-release/github', {
            successComment: false,
            failComment: false
        }]
    ]
}
