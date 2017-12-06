module.exports = {
    graphInit : {
        tree: [{ commit: 'C0', parent:[], child: []}],
        master: 'C0',
        currentCm: 'C0',
        lastCm: 'C0'
    },
    
    graphFinale : {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        master: 'C0',
        currentCm: 'C1',
        lastCm: 'C1'  
    },

    graphFinaleDeux : {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: ['C1'] },
                {commit: 'C2', parent:['C0'], child: [] }
        ],
        master: 'C0',
        currentCm: 'C2',
        lastCm: 'C2'
    },

    graphPush : {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        master: 'C1',
        currentCm: 'C1',
        lastCm: 'C1'  
    },
}

