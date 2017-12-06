module.exports = {
    graphInit : {
        tree: [{ commit: 'C0', parent:[], child: []}],
        master: '',
        currentCm: ''
    },
    
    graphFinale : {
        tree: [ {commit: 'C0', parent:[], child: [] },
                {commit: 'C1', parent:[], child: [] }
        ],
        master: '',
        currentCm: 'C0'        
    },

    graphFinaleDeux : {
        tree: [ {commit: 'C0', parent:[], child: [] },
                {commit: 'C1', parent:[], child: [] },
                {commit: 'C2', parent:[], child: [] }
        ],
        master: '',
        currentCm: 'C1'        
    },
}

