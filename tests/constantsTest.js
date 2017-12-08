module.exports = {
    
    graphInit : {
        tree: [{ commit: 'C0', parent:[], child: []}],
        branch: {
            master:'C0',
            develop:'C0',
            feature:[],
            hotfix:[],
            release :[],
        },
        currentBr:'develop',
        currentCm: 'C0',
        lastCm: 'C0'
    },
    
    graphFinale : {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        branch: {
            master:'C0',
            develop:'C1',
            feature:[],
            hotfix:[],
            release :[],
        },
        currentBr:'develop',
        currentCm: 'C1',
        lastCm: 'C1'  
    },

    graphFinaleDeux : {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: ['C1'] },
                {commit: 'C2', parent:['C0'], child: [] }
        ],
        branch: {
            master:'C0',
            develop:'C2',
            feature:[],
            hotfix:[],
            release :[],
        },
        currentBr:'develop',
        currentCm: 'C2',
        lastCm: 'C2'
    },

    graphPush : {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        branch: {
            master:'C0',
            develop:'C0',
            feature:[],
            hotfix:[],
            release :[],
        },
        currentBr:'develop',
        currentCm: 'C0',
        lastCm: 'C1'  
    },

    
    graphCheckoutInit: {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        branch: {
            master:'C0',
            develop:'C1',
            feature:[],
            hotfix:[],
            release :[],
        },
        currentBr:'develop',
        currentCm: 'C1',
        lastCm: 'C1'  
    },

    graphCheckoutFinale: {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        branch: {
            master:'C0',
            develop:'C1',
            feature:[],
            hotfix:[],
            release :[],
        },
        currentBr:'master',
        currentCm: 'C0',
        lastCm: 'C1'  
    },

    graphFeatureStart: {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        branch: {
            master:'C0',
            develop:'C1',
            feature:[],
            hotfix:[],
            release :[]
        },
        currentBr:'develop',
        currentCm: 'C1',
        lastCm: 'C1'  
    },

    graphFeatureStart2: {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        branch: {
            master:'C0',
            develop:'C1',
            feature:[{name:'yolow', commit:'C1'}],
            hotfix:[],
            release :[]
        },
        currentBr:'feature/yolow',
        currentCm: 'C1',
        lastCm: 'C1'  
    },

    graphFeatureFinsish: {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        branch: {
            master:'C0',
            develop:'C0',
            feature:[{name:'yolow', commit:'C1'}],
            hotfix:[],
            release :[]
        },
        currentBr:'feature/yolow',
        currentCm: 'C1',
        lastCm: 'C1'  
    },

    graphFeatureFinish2: {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        branch: {
            master:'C0',
            develop:'C1',
            feature:[],
            hotfix:[],
            release :[]
        },
        currentBr:'develop',
        currentCm: 'C1',
        lastCm: 'C1'  
    }
}

