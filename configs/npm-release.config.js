export default {
    branches: ['main'],
    // Hier werden nur die npm-Aufgaben ausgeführt.
    // Achtung: Da commit-Analyse fehlt, könnte semantic-release standardmäßig keinen neuen Release erkennen.
    plugins: [
        // Dummy-Analyse, die immer einen "patch" Release signalisiert
        {
            verifyConditions: () => Promise.resolve(),
            analyzeCommits: () => 'patch',
            generateNotes: () => '',
        },
        ['@semantic-release/npm', { npmPublish: true }]
    ]
}

