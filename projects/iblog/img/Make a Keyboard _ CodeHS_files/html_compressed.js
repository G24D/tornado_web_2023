Blockly.HTML = new Blockly.Generator('HTML');

Blockly.HTML.init = function(workspace) {};
Blockly.HTML.finish = function(code) {
    return code;
};

Blockly.HTML.scrub_ = function(block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = Blockly.HTML.blockToCode(nextBlock);
    return code + nextCode;
};

function removeIndentAndTrailingNewline() {}
