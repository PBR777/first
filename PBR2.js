(function(Scratch) {
    "use strict";


    class pbr {
        constructor() {}

        getInfo() {
            return {
                id: "pbr",
                name: "pbr",
                blocks: [{
                    opcode: "letters_of",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "letters [LETTER1] to [LETTER2] of [STRING]",
                    arguments: {
                        LETTER1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 2
                        },
                        LETTER2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 4
                        },
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "apple"
                        }
                    }
                }],
            };
        }
    }

    Scratch.extensions.register(new pbr());
})(Scratch);