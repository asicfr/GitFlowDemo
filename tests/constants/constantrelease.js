module.exports = {

    graphReleaseStart: {
        tree: [  {commit: 'C0', parent:[], child: ['C1'], branch: ['develop', 'master'] },
        {commit: 'C1', parent:['C0'], child: [], branch: ['develop'] }
        ],
        branch: {
            master:'C0',
            develop:'C1',
            feature:[],
            hotfix:[],
            release :[]
        },
        currentBr:'develop',
        selectedCommit: 'C1',
        lastCm: 'C1'  
    },
    
    graphReleaseStart2: {
        tree: [  {commit: 'C0', parent:[], child: ['C1'], branch: ['develop', 'master'] },
        {commit: 'C1', parent:['C0'], child: [], branch: ['develop'] }
        ],
        branch: {
            master:'C0',
            develop:'C1',
            feature:[],
            hotfix:[],
            release :[{name:'goku', commit:'C1'}]
        },
        currentBr:'release/goku',
        selectedCommit: 'C1',
        lastCm: 'C1'  
    },
    
        graphReleaseFinsish: {
            tree: [  {commit: 'C0', parent:[], child: ['C1'], branch: ['develop', 'master'] },
            {commit: 'C1', parent:['C0'], child: [], branch: ['develop'] }
            ],
            branch: {
                master:'C0',
                develop:'C0',
                feature:[],
                hotfix:[],
                release :[{name:'goku', commit:'C1'}]
            },
            currentBr:'release/goku',
            selectedCommit: 'C1',
            lastCm: 'C1'  
        },
    
        graphReleaseFinish2: {
            tree: [  {commit: 'C0', parent:[], child: ['C1'], branch: ['develop', 'master'] },
            {commit: 'C1', parent:['C0'], child: [], branch: ['develop'] }
            ],
            branch: {
                master:'C1',
                develop:'C1',
                feature:[],
                hotfix:[],
                release :[]
            },
            currentBr:'develop',
            selectedCommit: 'C1',
            lastCm: 'C1'  
        }
    
    }
    