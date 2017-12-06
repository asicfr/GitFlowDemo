module.exports = {
    graphInit : {
        tree: [{ commit: 'C0', parent:[], child: []}],
        master: '',
        currentCm: 'C0',
        lastCm: 'C0'
    },
    
    graphFinale : {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: [] }
        ],
        master: '',
        currentCm: 'C1',
        lastCm: 'C1'  
    },

    graphFinaleDeux : {
        tree: [ {commit: 'C0', parent:[], child: ['C1'] },
                {commit: 'C1', parent:['C0'], child: ['C1'] },
                {commit: 'C2', parent:['C0'], child: [] }
        ],
        master: '',
        currentCm: 'C2',
        lastCm: 'C2'
    },
}

