// Overrides
window.Blockly.JavaScript['text_print'] = function (block) {
    var msg =
        window.Blockly.JavaScript.valueToCode(
            block,
            'TEXT',
            window.Blockly.JavaScript.ORDER_NONE
        ) || "''";
    return 'console.log(' + msg + ');\n';
};

window.Blockly.JavaScript['controls_repeat_ext'] = function (a) {
    var b = a.getField('TIMES')
            ? String(Number(a.getFieldValue('TIMES')))
            : window.Blockly.JavaScript.valueToCode(
                  a,
                  'TIMES',
                  window.Blockly.JavaScript.ORDER_ASSIGNMENT
              ) || '0',
        c = window.Blockly.JavaScript.statementToCode(a, 'DO');
    c = window.Blockly.JavaScript.addLoopTrap(c, a.id);
    a = '';
    var d = window.Blockly.JavaScript.variableDB_.getDistinctName(
            'i',
            window.Blockly.Variables.NAME_TYPE
        ),
        e = b;
    // eslint-disable-next-line no-unused-expressions
    b.match(/^\w+$/) ||
        window.Blockly.isNumber(b) ||
        ((e = window.Blockly.JavaScript.variableDB_.getDistinctName(
            'repeat_end',
            window.Blockly.Variables.NAME_TYPE
        )),
        (a += 'var ' + e + ' = ' + b + ';\n'));
    return a + ('for (var ' + d + ' = 0; ' + d + ' < ' + e + '; ' + d + '++) {\n' + c + '}\n');
};

// Karel blocks
window.Blockly.Blocks['karel_turn_left'] = {
    init: function () {
        this.setColour(330);
        this.setTooltip('Turn Karel 90 degrees left');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('turn left');
    },
};

window.Blockly.JavaScript['karel_turn_left'] = function (block) {
    return 'turnLeft();\n';
};

window.Blockly.Blocks['karel_turn_right'] = {
    init: function () {
        this.setColour(330);
        this.setTooltip('Turn Karel 90 degrees right');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('turn right');
    },
};

window.Blockly.JavaScript['karel_turn_right'] = function (block) {
    return 'turnRight();\n';
};

window.Blockly.Blocks['karel_turn_around'] = {
    init: function () {
        this.setColour(330);
        this.setTooltip('Turn Karel 180 degrees around');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('turn around');
    },
};

window.Blockly.JavaScript['karel_turn_around'] = function (block) {
    return 'turnAround();\n';
};

window.Blockly.Blocks['karel_move_forward'] = {
    init: function () {
        this.setColour(330);
        this.setTooltip('Move Karel forward one unit');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('move');
    },
};

window.Blockly.JavaScript['karel_move_forward'] = function (block) {
    return 'move();\n';
};

window.Blockly.Blocks['karel_put_ball'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Put down one ball at current position');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('put ball');
    },
};

window.Blockly.JavaScript['karel_put_ball'] = function (block) {
    return 'putBall();\n';
};

window.Blockly.Blocks['karel_take_ball'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Pick up a ball from current position');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('take ball');
    },
};

window.Blockly.JavaScript['karel_take_ball'] = function (block) {
    return 'takeBall();\n';
};

window.Blockly.Blocks['karel_clear'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Boolean');
        this.setTooltip('Check if movement is clear');
        this.appendDummyInput()
            .appendField('is')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['front', 'front'],
                    ['left', 'left'],
                    ['right', 'right'],
                ]),
                'MOVE'
            )
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['clear', 'IsClear()'],
                    ['blocked', 'IsBlocked()'],
                ]),
                'CLEAR'
            );
    },
};
window.Blockly.JavaScript['karel_clear'] = function (block) {
    var move = block.getFieldValue('MOVE');
    var clear = block.getFieldValue('CLEAR');
    return [move + clear, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['karel_facing'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Boolean');
        this.setTooltip('Check if karel is facing a direction');
        this.appendDummyInput()
            .appendField('is karel ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['facing', 'facing'],
                    ['not facing', 'notFacing'],
                ]),
                'FACING'
            )
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['north', 'North()'],
                    ['south', 'South()'],
                    ['west', 'West()'],
                    ['east', 'East()'],
                ]),
                'DIRECTION'
            );
    },
};
window.Blockly.JavaScript['karel_facing'] = function (block) {
    var direction = block.getFieldValue('DIRECTION');
    var facing = block.getFieldValue('FACING');
    return [facing + direction, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['karel_balls_present'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Boolean');
        this.setTooltip('Check if balls exist at position');
        this.appendDummyInput()
            .appendField('are balls ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['present', 'ballsPresent()'],
                    ['not present', 'noBallsPresent()'],
                ]),
                'PRESENT'
            );
    },
};
window.Blockly.JavaScript['karel_balls_present'] = function (block) {
    var present = block.getFieldValue('PRESENT');
    return [present, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['karel_paint'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Paint current position with a color');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendValueInput('COLOUR')
            .setCheck('Karel_Colour')
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField('paint');
    },
};

window.Blockly.JavaScript['karel_paint'] = function (block) {
    var colour = window.Blockly.JavaScript.valueToCode(
        this,
        'COLOUR',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = 'paint(' + (colour || 'Color.red') + ');\n';
    return code;
};

window.Blockly.Blocks['karel_color'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Get a color');
        this.setOutput(true, 'Karel_Colour');
        this.appendDummyInput()
            .appendField('color: ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['red', 'Color.red'],
                    ['blue', 'Color.blue'],
                    ['green', 'Color.green'],
                    ['yellow', 'Color.yellow'],
                    ['cyan', 'Color.cyan'],
                    ['orange', 'Color.orange'],
                    ['white', 'Color.white'],
                    ['black', 'Color.black'],
                    ['gray', 'Color.gray'],
                    ['purple', 'Color.purple'],
                ]),
                'COLOUR'
            );
    },
};

window.Blockly.JavaScript['karel_color'] = function (block) {
    var colour = block.getFieldValue('COLOUR');
    return [colour, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['karel_random_color'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Get a random color');
        this.setOutput(true, 'Karel_Colour');
        this.appendDummyInput().appendField('random color');
    },
};

window.Blockly.JavaScript['karel_random_color'] = function (block) {
    return ['Color.random()', window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['karel_color_is'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Boolean');
        this.setTooltip('Check if the current color matches');
        this.appendValueInput('COLOUR')
            .setCheck('Karel_Colour')
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField('is color');
    },
};
window.Blockly.JavaScript['karel_color_is'] = function (block) {
    var colour = window.Blockly.JavaScript.valueToCode(
        this,
        'COLOUR',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = 'colorIs(' + colour + ')';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['karel_random_chance'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Boolean');
        this.setTooltip('return true a percent of the time');
        this.appendValueInput('PROBABILITY')
            .setCheck('Number')
            .appendField('random chance')
            .setAlign(window.Blockly.ALIGN_RIGHT);
    },
};
window.Blockly.JavaScript['karel_random_chance'] = function (block) {
    var probability = window.Blockly.JavaScript.valueToCode(
        this,
        'PROBABILITY',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = 'randomChance(' + (probability || '.50') + ')';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

// General Blocks

window.Blockly.Blocks['main_program'] = {
    init: function () {
        this.setColour(160);
        this.appendDummyInput().appendField('Program:');
        this.setTooltip('Place blocks for your main code.');
        this.appendStatementInput('DO');
        this.setDeletable(false);
    },
};

window.Blockly.JavaScript['main_program'] = function (block) {
    return (
        'function main_program_function(){\n' +
        window.Blockly.JavaScript.statementToCode(block, 'DO') +
        '}\nmain_program_function();'
    );
};

window.Blockly.Python['main_program'] = function (block) {
    return (
        'def main_program_function():\n' +
        (window.Blockly.Python.statementToCode(block, 'DO') || '    pass\n') +
        'main_program_function()'
    );
};

window.Blockly.HTML['main_program'] = function (block) {
    return window.Blockly.HTML.statementToCode(block, 'DO');
};

// Turtle
window.Blockly.Blocks['turtle_import_turtle'] = {
    init: function () {
        this.setColour(160);
        this.appendDummyInput().appendField('get turtle');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    },
};

window.Blockly.Python['turtle_import_turtle'] = function (block) {
    return `import turtle\nt = turtle.Turtle()\n`;
};

window.Blockly.Blocks['turtle_move_forward'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Move Tracy forward a given distance');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendValueInput('DISTANCE')
            .setCheck('Number')
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField('forward');
    },
};

window.Blockly.Python['turtle_move_forward'] = function (block) {
    var code = window.Blockly.Python.valueToCode(
        this,
        'DISTANCE',
        window.Blockly.Python.ORDER_ATOMIC
    );
    return '__turtle.forward(' + code + ')\n';
};

window.Blockly.Blocks['turtle_move_backward'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Move Tracy backward a given distance');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendValueInput('DISTANCE')
            .setCheck('Number')
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField('backward');
    },
};

window.Blockly.Python['turtle_move_backward'] = function (block) {
    var code = window.Blockly.Python.valueToCode(
        this,
        'DISTANCE',
        window.Blockly.Python.ORDER_ATOMIC
    );
    return '__turtle.backward(' + code + ')\n';
};

window.Blockly.Blocks['turtle_turn_left'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Turn Tracy to the left a given degrees');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput()
            .appendField('left:')
            .appendField(new window.Blockly.FieldAngle(90), 'DEGREES');
    },
};

window.Blockly.Python['turtle_turn_left'] = function (block) {
    return '__turtle.left(' + block.getFieldValue('DEGREES') + ')\n';
};

window.Blockly.Blocks['turtle_turn_right'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Turn Tracy to the right a given degrees');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput()
            .appendField('right:')
            .appendField(new window.Blockly.FieldAngle(90), 'DEGREES');
    },
};

window.Blockly.Python['turtle_turn_right'] = function (block) {
    return '__turtle.right(' + block.getFieldValue('DEGREES') + ')\n';
};

window.Blockly.Blocks['turtle_set_color'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Draw a line of the given color');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput()
            .appendField('color: ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['black', 'black'],
                    ['blue', 'blue'],
                    ['brown', 'brown'],
                    ['cyan', 'cyan'],
                    ['gold', 'gold'],
                    ['gray', 'gray'],
                    ['green', 'green'],
                    ['indigo', 'indigo'],
                    ['orange', 'orange'],
                    ['pink', 'pink'],
                    ['purple', 'purple'],
                    ['red', 'red'],
                    ['violet', 'violet'],
                    ['white', 'white'],
                    ['yellow', 'yellow'],
                ]),
                'FIELDNAME'
            );
    },
};

window.Blockly.Python['turtle_set_color'] = function (block) {
    return '__turtle.color("' + block.getFieldValue('FIELDNAME') + '")\n';
};

window.Blockly.Blocks['turtle_set_bgcolor'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Set the background to the given color');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput()
            .appendField('background color: ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['black', 'black'],
                    ['blue', 'blue'],
                    ['brown', 'brown'],
                    ['cyan', 'cyan'],
                    ['gold', 'gold'],
                    ['gray', 'gray'],
                    ['green', 'green'],
                    ['indigo', 'indigo'],
                    ['orange', 'orange'],
                    ['pink', 'pink'],
                    ['purple', 'purple'],
                    ['red', 'red'],
                    ['violet', 'violet'],
                    ['white', 'white'],
                    ['yellow', 'yellow'],
                ]),
                'FIELDNAME'
            );
    },
};

window.Blockly.Python['turtle_set_bgcolor'] = function (block) {
    return '__turtle.getscreen().bgcolor("' + block.getFieldValue('FIELDNAME') + '")\n';
};

window.Blockly.Blocks['turtle_filling'] = {
    init: function () {
        this.setColour(160);
        this.appendDummyInput().appendField('filling:');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Draw a filled shape.');
        this.appendStatementInput('DO');
    },
};

window.Blockly.Python['turtle_filling'] = function (block) {
    const code = window.Blockly.Python.statementToCode(block, 'DO');
    const unindentedCode = code.replace(/^[^ ]? {2}/gm, '');

    return '__turtle.begin_fill()\n' + unindentedCode + '__turtle.end_fill()\n';
};

window.Blockly.Blocks['turtle_pen_size'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Change the size of the pen');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendValueInput('SIZE')
            .setCheck('Number')
            .setAlign(window.Blockly.ALIGN_RIGHT)
            .appendField('pen size');
    },
};

window.Blockly.Python['turtle_pen_size'] = function (block) {
    var code = window.Blockly.Python.valueToCode(this, 'SIZE', window.Blockly.Python.ORDER_ATOMIC);
    return '__turtle.pensize(' + code + ')\n';
};

window.Blockly.Blocks['turtle_pen_up'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Lift the pen up');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('pen up');
    },
};

window.Blockly.Python['turtle_pen_up'] = function (block) {
    return '__turtle.penup()\n';
};

window.Blockly.Blocks['turtle_pen_down'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Put the pen down');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('pen down');
    },
};

window.Blockly.Python['turtle_pen_down'] = function (block) {
    return '__turtle.pendown()\n';
};

window.Blockly.Blocks['turtle_undo'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Undo the last action');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('undo');
    },
};

window.Blockly.Python['turtle_undo'] = function (block) {
    return '__turtle.undo()\n';
};

window.Blockly.Blocks['turtle_set_speed'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip("Set Tracy's speed (0 for max speed)");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput()
            .appendField('speed: ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['0', '0'],
                    ['1', '1'],
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                ]),
                'FIELDNAME'
            );
    },
};

window.Blockly.Python['turtle_set_speed'] = function (block) {
    return '__turtle.speed(' + block.getFieldValue('FIELDNAME') + ')\n';
};

window.Blockly.Blocks['turtle_set_coord'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Send Tracy to the given (x, y) coordinates');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.appendValueInput('XCOORD')
            .setCheck('Number')
            .appendField('set position: x =')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendValueInput('YCOORD').setCheck('Number').appendField(' y =');
    },
};

window.Blockly.Python['turtle_set_coord'] = function (block) {
    var X = window.Blockly.Python.valueToCode(this, 'XCOORD', window.Blockly.Python.ORDER_ATOMIC);
    var Y = window.Blockly.Python.valueToCode(this, 'YCOORD', window.Blockly.Python.ORDER_ATOMIC);
    return '__turtle.setposition(' + X + ', ' + Y + ')\n';
};

window.Blockly.Blocks['turtle_set_shape'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Make Tracy look like a shape');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput()
            .appendField('shape: ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['turtle', 'turtle'],
                    ['arrow', 'arrow'],
                    ['triangle', 'triangle'],
                    ['circle', 'circle'],
                    ['square', 'square'],
                    ['classic', 'classic'],
                ]),
                'FIELDNAME'
            );
    },
};

window.Blockly.Python['turtle_set_shape'] = function (block) {
    return '__turtle.shape("' + block.getFieldValue('FIELDNAME') + '")\n';
};

window.Blockly.Blocks['turtle_set_shape_size'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip("Set Tracy's size");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.appendValueInput('WIDTH')
            .setCheck('Number')
            .appendField('width')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendValueInput('LENGTH').setCheck('Number').appendField(' length');
        this.appendValueInput('OUTLINE').setCheck('Number').appendField(' outline ');
    },
};

window.Blockly.Python['turtle_set_shape_size'] = function (block) {
    var width = window.Blockly.Python.valueToCode(
        this,
        'WIDTH',
        window.Blockly.Python.ORDER_ATOMIC
    );
    var length = window.Blockly.Python.valueToCode(
        this,
        'LENGTH',
        window.Blockly.Python.ORDER_ATOMIC
    );
    var outline = window.Blockly.Python.valueToCode(
        this,
        'OUTLINE',
        window.Blockly.Python.ORDER_ATOMIC
    );
    return (
        '__turtle.shapesize(' +
        (width ? Math.max(0, width) : '0') +
        ', ' +
        (length ? Math.max(0, length) : '0') +
        ', ' +
        (outline ? Math.max(0, outline) : '0') +
        ')\n'
    );
};

window.Blockly.Blocks['turtle_show'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Show Tracy');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.appendDummyInput().appendField('show');
    },
};

window.Blockly.Python['turtle_show'] = function (block) {
    return '__turtle.showturtle()\n';
};

window.Blockly.Blocks['turtle_hide'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Hide Tracy');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.appendDummyInput().appendField('hide');
    },
};

window.Blockly.Python['turtle_hide'] = function (block) {
    return '__turtle.hideturtle()\n';
};

window.Blockly.Blocks['turtle_reset'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip("Reset Tracy's position and remove drawings");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.appendDummyInput().appendField('reset');
    },
};

window.Blockly.Python['turtle_reset'] = function (block) {
    return '__turtle.reset()\n';
};

window.Blockly.Blocks['turtle_clear'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip("Clear Tracy's drawings");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.appendDummyInput().appendField('clear');
    },
};

window.Blockly.Python['turtle_clear'] = function (block) {
    return '__turtle.clear()\n';
};

// Graphics
window.Blockly.Blocks['canvas_make_rectangle'] = {
    init: function () {
        this.setInputsInline(true);
        this.setColour(160);
        this.setOutput(true, 'Rectangle');
        this.setTooltip('Make a new Rectangle with width and height');
        this.appendDummyInput().appendField('rectangle with');
        this.appendValueInput('WIDTH').setCheck('Number').appendField('width:');
        this.appendValueInput('HEIGHT').setCheck('Number').appendField('height:');
    },
};

window.Blockly.JavaScript['canvas_make_rectangle'] = function (block) {
    var width = window.Blockly.JavaScript.valueToCode(
        this,
        'WIDTH',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var height = window.Blockly.JavaScript.valueToCode(
        this,
        'HEIGHT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = 'new Rectangle(' + (width || '0') + ',' + (height || '0') + ')';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['canvas_make_circle'] = {
    init: function () {
        this.setInputsInline(true);
        this.setColour(160);
        this.setOutput(true, 'Circle');
        this.setTooltip('Make a new Circle from radius');
        this.appendDummyInput().appendField('circle with');
        this.appendValueInput('RADIUS').setCheck('Number').appendField('radius:');
    },
};

window.Blockly.JavaScript['canvas_make_circle'] = function (block) {
    var radius = window.Blockly.JavaScript.valueToCode(
        this,
        'RADIUS',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = 'new Circle(' + (radius || '0') + ')';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['canvas_make_line'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Line');
        this.setTooltip('Make a new Line from x1,y1 to x2,y2');
        this.appendDummyInput().appendField('line from');
        this.appendValueInput('X1').setCheck('Number').appendField('x:');
        this.appendValueInput('Y1').setCheck('Number').appendField('y:');
        this.appendDummyInput().appendField('to');
        this.appendValueInput('X2').setCheck('Number').appendField('x:');
        this.appendValueInput('Y2').setCheck('Number').appendField('y:');
    },
};

window.Blockly.JavaScript['canvas_make_line'] = function (block) {
    var x1 = window.Blockly.JavaScript.valueToCode(
        this,
        'X1',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var y1 = window.Blockly.JavaScript.valueToCode(
        this,
        'Y1',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );

    var x2 = window.Blockly.JavaScript.valueToCode(
        this,
        'X2',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var y2 = window.Blockly.JavaScript.valueToCode(
        this,
        'Y2',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );

    var code = 'new Line(' + (x1 || 0) + ',' + (y1 || 0) + ',' + (x2 || 0) + ',' + (y2 || 0) + ')';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['canvas_make_text'] = {
    init: function () {
        this.setInputsInline(true);
        this.setColour(160);
        this.setOutput(true, 'Text');
        this.setTooltip('Make a text object');
        this.appendDummyInput().appendField('text with ');
        this.appendValueInput('LABEL').setCheck(['String', 'Number']).appendField('label:');
        this.appendValueInput('FONT').setCheck('String').appendField('font:');
    },
};

window.Blockly.JavaScript['canvas_make_text'] = function (block) {
    var label = window.Blockly.JavaScript.valueToCode(
        this,
        'LABEL',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var font = window.Blockly.JavaScript.valueToCode(
        this,
        'FONT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );

    var code = 'new Text(' + (label || '""') + ',' + (font || '""') + ')';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['canvas_make_arc'] = {
    init: function () {
        this.setInputsInline(true);
        this.setColour(160);
        this.setOutput(true, 'Arc');
        this.setTooltip('Make a new Arc ');
        this.appendDummyInput().appendField('arc with');
        this.appendValueInput('RADIUS').setCheck('Number').appendField('radius:');
        this.appendValueInput('STARTANGLE').setCheck('Number').appendField('start angle:');
        this.appendValueInput('ENDANGLE').setCheck('Number').appendField('end angle:');
        this.appendDummyInput()
            .appendField(' using: ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['degrees', 'degrees'],
                    ['radians', 'radians'],
                ]),
                'FIELDNAME'
            );
    },
};

window.Blockly.JavaScript['canvas_make_arc'] = function (block) {
    var radius = window.Blockly.JavaScript.valueToCode(
        this,
        'RADIUS',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var startAngle = window.Blockly.JavaScript.valueToCode(
        this,
        'STARTANGLE',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var endAngle = window.Blockly.JavaScript.valueToCode(
        this,
        'ENDANGLE',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var angleUnit = block.getFieldValue('FIELDNAME') === 'degrees' ? 0 : 1;

    var code =
        'new Arc(' +
        (radius || '0') +
        ', ' +
        (startAngle || '0') +
        ', ' +
        (endAngle || '0') +
        ', ' +
        angleUnit +
        ')';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['canvas_make_oval'] = {
    init: function () {
        this.setInputsInline(true);
        this.setColour(160);
        this.setOutput(true, 'Oval');
        this.setTooltip('Make an oval');
        this.appendDummyInput().appendField('oval with ');
        this.appendValueInput('WIDTH').setCheck('Number').appendField('width:');
        this.appendValueInput('HEIGHT').setCheck('Number').appendField('height:');
    },
};

window.Blockly.JavaScript['canvas_make_oval'] = function (block) {
    var width = window.Blockly.JavaScript.valueToCode(
        this,
        'WIDTH',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var height = window.Blockly.JavaScript.valueToCode(
        this,
        'HEIGHT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = 'new Oval(' + (width || '0') + ',' + (height || '0') + ')';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['canvas_make_webimage'] = {
    init: function () {
        this.setInputsInline(true);
        this.setColour(160);
        this.setOutput(true, 'Webimage');
        this.setTooltip('make a web image');
        this.appendValueInput('IMG_URL').setCheck('URL').appendField('New WebImage: ');
    },
};

window.Blockly.JavaScript['canvas_make_webimage'] = function (block) {
    var value_img_url = window.Blockly.JavaScript.valueToCode(
        block,
        'IMG_URL',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = 'new WebImage("' + (value_img_url || '') + '")';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['image_library_dropdown'] = {
    init: function () {
        this.appendDummyInput().appendField(
            new window.Blockly.FieldDropdown([
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/golfball.png',
                        width: 30,
                        height: 30,
                        alt: 'Golf Ball',
                    },
                    'https://static1.codehs.com/img/library/objects/golfball.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/soccerBall.png',
                        width: 30,
                        height: 30,
                        alt: 'Soccer Ball',
                    },
                    'https://static1.codehs.com/img/library/objects/soccerBall.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/basketball.png',
                        width: 30,
                        height: 30,
                        alt: 'Basketball',
                    },
                    'https://static1.codehs.com/img/library/objects/basketball.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/baseball.png',
                        width: 30,
                        height: 30,
                        alt: 'Baseball',
                    },
                    'https://static1.codehs.com/img/library/objects/baseball.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/football.png',
                        width: 30,
                        height: 30,
                        alt: 'Football',
                    },
                    'https://static1.codehs.com/img/library/objects/football.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/cleat.png',
                        width: 30,
                        height: 30,
                        alt: 'Cleat',
                    },
                    'https://static1.codehs.com/img/library/objects/cleat.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/baseballGlove.png',
                        width: 30,
                        height: 30,
                        alt: 'Baseball Glove',
                    },
                    'https://static1.codehs.com/img/library/objects/baseballGlove.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/baseballBat.png',
                        width: 30,
                        height: 10,
                        alt: 'Baseball Bat',
                    },
                    'https://static1.codehs.com/img/library/objects/baseballBat.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/helicopter.png',
                        width: 30,
                        height: 30,
                        alt: 'Helicopter',
                    },
                    'https://static1.codehs.com/img/library/objects/helicopter.png',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/2bfaf5b2cb650e659067f495cea6af10',
                        width: 30,
                        height: 30,
                        alt: 'Soccer Goal',
                    },
                    'https://codehs.com/uploads/2bfaf5b2cb650e659067f495cea6af10',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/17c0ba426ff70140e0f85ade86963672',
                        width: 30,
                        height: 30,
                        alt: 'Basketball Hoop',
                    },
                    'https://codehs.com/uploads/17c0ba426ff70140e0f85ade86963672',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/icicle.png',
                        width: 30,
                        height: 30,
                        alt: 'Icicle',
                    },
                    'https://static1.codehs.com/img/library/objects/icicle.png',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/e517c63fa6c746c5702aa6d8680cb1c7',
                        width: 30,
                        height: 30,
                        alt: 'Hand',
                    },
                    'https://codehs.com/uploads/e517c63fa6c746c5702aa6d8680cb1c7',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/156ee7aecf48bcb3ba67a4a9779a9a27',
                        width: 30,
                        height: 30,
                        alt: 'Windmill',
                    },
                    'https://codehs.com/uploads/156ee7aecf48bcb3ba67a4a9779a9a27',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/cb8c0410e0c303e05c958687b5a8d711',
                        width: 30,
                        height: 30,
                        alt: 'Tree',
                    },
                    'https://codehs.com/uploads/cb8c0410e0c303e05c958687b5a8d711',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/924513357f990dea9b12f738b4d8d737',
                        width: 30,
                        height: 30,
                        alt: 'Stegosaurus',
                    },
                    'https://codehs.com/uploads/924513357f990dea9b12f738b4d8d737',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/c0a0ac38e0859cc406ddc8dcfee7e196',
                        width: 30,
                        height: 30,
                        alt: 'Sauropod',
                    },
                    'https://codehs.com/uploads/c0a0ac38e0859cc406ddc8dcfee7e196',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/3fd75116498f338e1642aeb7a54854d2',
                        width: 30,
                        height: 30,
                        alt: 'Tuna',
                    },
                    'https://codehs.com/uploads/3fd75116498f338e1642aeb7a54854d2',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/f1344bfc0d0c89698426941868d2b62a',
                        width: 30,
                        height: 30,
                        alt: 'Shark',
                    },
                    'https://codehs.com/uploads/f1344bfc0d0c89698426941868d2b62a',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/f77b1ed3f28e199fac4a37b5c5195456',
                        width: 30,
                        height: 30,
                        alt: 'Dolphin',
                    },
                    'https://codehs.com/uploads/f77b1ed3f28e199fac4a37b5c5195456',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/4f9d54b91352994c26e0d80dd831cc14',
                        width: 30,
                        height: 30,
                        alt: 'Fish',
                    },
                    'https://codehs.com/uploads/4f9d54b91352994c26e0d80dd831cc14',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/f2c83d4928b79e796a3f0d56b62263b4',
                        width: 30,
                        height: 30,
                        alt: 'Orca',
                    },
                    'https://codehs.com/uploads/f2c83d4928b79e796a3f0d56b62263b4',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/2d249d026e09e6569685f5c696a344e7',
                        width: 30,
                        height: 30,
                        alt: 'Octopus',
                    },
                    'https://codehs.com/uploads/2d249d026e09e6569685f5c696a344e7',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/characters/penguin.png',
                        width: 30,
                        height: 30,
                        alt: 'Penguin',
                    },
                    'https://static1.codehs.com/img/library/characters/penguin.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/characters/butterfly.jpg',
                        width: 30,
                        height: 30,
                        alt: 'Butterfly',
                    },
                    'https://static1.codehs.com/img/library/characters/butterfly.jpg',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/characters/chameleon.jpg',
                        width: 30,
                        height: 30,
                        alt: 'Chameleon',
                    },
                    'https://static1.codehs.com/img/library/characters/chameleon.jpg',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/characters/leopard.jpg',
                        width: 30,
                        height: 30,
                        alt: 'Leopard',
                    },
                    'https://static1.codehs.com/img/library/characters/leopard.jpg',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/characters/lizard.jpg',
                        width: 30,
                        height: 30,
                        alt: 'Lizard',
                    },
                    'https://static1.codehs.com/img/library/characters/lizard.jpg',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/characters/monkey.jpg',
                        width: 30,
                        height: 30,
                        alt: 'Monkey',
                    },
                    'https://static1.codehs.com/img/library/characters/monkey.jpg',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/7b9c5e528c85500d9d7df1e665d1cdcd',
                        width: 30,
                        height: 30,
                        alt: 'Earth',
                    },
                    'https://codehs.com/uploads/7b9c5e528c85500d9d7df1e665d1cdcd',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/83e09e42dd04748be10d753182901e16',
                        width: 30,
                        height: 30,
                        alt: 'Astronaut',
                    },
                    'https://codehs.com/uploads/83e09e42dd04748be10d753182901e16',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/bbd0a11226c250187b6486ed0d270589',
                        width: 30,
                        height: 30,
                        alt: 'UFO',
                    },
                    'https://codehs.com/uploads/bbd0a11226c250187b6486ed0d270589',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/rocket.png',
                        width: 30,
                        height: 30,
                        alt: 'Rocket',
                    },
                    'https://static1.codehs.com/img/library/objects/rocket.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/objects/asteroid.png',
                        width: 30,
                        height: 30,
                        alt: 'Asteroid',
                    },
                    'https://static1.codehs.com/img/library/objects/asteroid.png',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/landscapes/grass.jpg',
                        width: 30,
                        height: 30,
                        alt: 'Grass',
                    },
                    'https://static1.codehs.com/img/library/landscapes/grass.jpg',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/77ff1ab4ca40b7de48b7d09014b452f4',
                        width: 30,
                        height: 30,
                        alt: 'Basketball Court',
                    },
                    'https://codehs.com/uploads/77ff1ab4ca40b7de48b7d09014b452f4',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/landscapes/flowers.jpg',
                        width: 30,
                        height: 30,
                        alt: 'Flowers',
                    },
                    'https://static1.codehs.com/img/library/landscapes/flowers.jpg',
                ],
                [
                    {
                        src: 'https://static1.codehs.com/img/library/landscapes/aurora.jpg',
                        width: 30,
                        height: 30,
                        alt: 'Aurora',
                    },
                    'https://static1.codehs.com/img/library/landscapes/aurora.jpg',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/d3022ee9fe85bd91c222c66c1f1846cf',
                        width: 30,
                        height: 30,
                        alt: 'Desert',
                    },
                    'https://codehs.com/uploads/d3022ee9fe85bd91c222c66c1f1846cf',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/67b0a8467d8573caa2ea06b3ffa51da0',
                        width: 30,
                        height: 30,
                        alt: 'Underwater',
                    },
                    'https://codehs.com/uploads/67b0a8467d8573caa2ea06b3ffa51da0',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/6b6a789d779e42792b77b937eff36935',
                        width: 30,
                        height: 30,
                        alt: 'Space 1',
                    },
                    'https://codehs.com/uploads/6b6a789d779e42792b77b937eff36935',
                ],
                [
                    {
                        src: 'https://codehs.com/uploads/ee2deea60a7eff155665f97b1372a03d',
                        width: 30,
                        height: 30,
                        alt: 'Space 2',
                    },
                    'https://codehs.com/uploads/ee2deea60a7eff155665f97b1372a03d',
                ],
            ]),
            'IMG_URL'
        );
        this.setOutput(true, 'URL');
        this.setColour(275);
        this.setTooltip('Block representing an image url');
        this.setHelpUrl('');
    },
};

window.Blockly.JavaScript['image_library_dropdown'] = function (block) {
    var dropdown_url = block.getFieldValue('IMG_URL');
    var code = dropdown_url;
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['image_custom_url'] = {
    init: function () {
        this.appendDummyInput().appendField(
            new window.Blockly.FieldTextInput(
                'https://static1.codehs.com/img/library/objects/soccerBall.png'
            ),
            'IMG_URL'
        );
        this.setOutput(true, 'URL');
        this.setColour(275);
        this.setTooltip('Block representing an image from a custom url');
        this.setHelpUrl('');
    },
};

window.Blockly.JavaScript['image_custom_url'] = function (block) {
    var text_img_url = block.getFieldValue('IMG_URL');
    var code = text_img_url;
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['webimage_get_pixel'] = {
    init: function () {
        this.setInputsInline(true);
        this.setColour(160);
        this.setOutput(true, 'Pixel');
        this.setTooltip('get the pixel at an index');
        this.appendValueInput('PICTURE').setCheck('Webimage').appendField('from picture:');
        this.appendValueInput('X').setCheck('Number').appendField('Pixel at x:');
        this.appendValueInput('Y').setCheck('Number').appendField('y:');
    },
};

window.Blockly.JavaScript['webimage_get_pixel'] = function (block) {
    var picture = window.Blockly.JavaScript.valueToCode(
        this,
        'PICTURE',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (picture === null || picture === '') {
        return ['', window.Blockly.JavaScript.ORDER_ATOMIC];
    }

    var x = window.Blockly.JavaScript.valueToCode(
        this,
        'X',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var y = window.Blockly.JavaScript.valueToCode(
        this,
        'Y',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var code = '(' + picture + ').getPixel(' + (x || '0') + ', ' + (y || '0') + ')';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['pixel_get_channel'] = {
    init: function () {
        this.setInputsInline(true);
        this.setColour(160);
        this.setOutput(true, 'Number');
        this.setTooltip('get the channel of a pixel');
        this.appendValueInput('PIXEL').setCheck('Pixel').appendField('from pixel:');
        this.appendDummyInput()
            .appendField('get ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['red', '0'],
                    ['green', '1'],
                    ['blue', '2'],
                ]),
                'CHANNEL'
            );
    },
};

window.Blockly.JavaScript['pixel_get_channel'] = function (block) {
    var pixel = window.Blockly.JavaScript.valueToCode(
        this,
        'PIXEL',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (pixel === null || pixel === '') {
        return ['', window.Blockly.JavaScript.ORDER_ATOMIC];
    }
    var channel = block.getFieldValue('CHANNEL');
    var code = '(' + pixel + ')[' + (channel || '0') + ']';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['webimage_set_pixel_channel_value'] = {
    init: function () {
        this.setInputsInline(true);
        this.setColour(160);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('set the pixel at an index');
        this.appendValueInput('PICTURE').setCheck('Webimage').appendField('for picture:');
        this.appendDummyInput()
            .appendField('set ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['red', '0'],
                    ['green', '1'],
                    ['blue', '2'],
                ]),
                'CHANNEL'
            );
        this.appendValueInput('VALUE').setCheck('Number').appendField('to ');
        this.appendValueInput('X').setCheck('Number').appendField(' at x:');
        this.appendValueInput('Y').setCheck('Number').appendField('y:');
    },
};

window.Blockly.JavaScript['webimage_set_pixel_channel_value'] = function (block) {
    var picture = window.Blockly.JavaScript.valueToCode(
        this,
        'PICTURE',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (picture === null || picture === '') {
        return '';
    }

    var x = window.Blockly.JavaScript.valueToCode(
        this,
        'X',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var y = window.Blockly.JavaScript.valueToCode(
        this,
        'Y',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var channel = block.getFieldValue('CHANNEL');
    var value = window.Blockly.JavaScript.valueToCode(
        this,
        'VALUE',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );

    return (
        '(' +
        picture +
        ').setPixel(' +
        (x || '0') +
        ', ' +
        (y || '0') +
        ', ' +
        (channel || '0') +
        ', ' +
        (value || '0') +
        ');\n'
    );
};

window.Blockly.Blocks['canvas_get_width'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Get the width of the canvas');
        this.setOutput(true, 'Number');
        this.appendDummyInput().appendField('canvas width\n');
    },
};

window.Blockly.JavaScript['canvas_get_width'] = function (block) {
    return ['getWidth()', window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['canvas_get_height'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Get the height of the canvas');
        this.setOutput(true, 'Number');
        this.appendDummyInput().appendField('canvas height');
    },
};

window.Blockly.JavaScript['canvas_get_height'] = function (block) {
    return ['getHeight()', window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['canvas_remove_all'] = {
    init: function () {
        this.setColour(160);
        this.setTooltip('Removes all objects from the canvas');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendDummyInput().appendField('clear canvas');
    },
};

window.Blockly.JavaScript['canvas_remove_all'] = function (block) {
    return 'removeAll();\n';
};

window.Blockly.Blocks['object_set_position'] = {
    init: function () {
        this.setColour(160);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Move object to coordinate');
        this.appendValueInput('OBJECT')
            .setCheck(['Rectangle', 'Circle', 'Arc', 'Line', 'Oval', 'Text', 'Webimage'])
            .appendField('set:');
        this.appendDummyInput().appendField('to coordinate');
        this.appendValueInput('XCOORD')
            .setCheck('Number')
            .appendField('x:')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendValueInput('YCOORD')
            .setCheck('Number')
            .appendField('y:')
            .setAlign(window.Blockly.ALIGN_RIGHT);
    },
};

window.Blockly.JavaScript['object_set_position'] = function (block) {
    var object = window.Blockly.JavaScript.valueToCode(
        this,
        'OBJECT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (object === null || object === '') {
        return '';
    }
    var X = window.Blockly.JavaScript.valueToCode(
        this,
        'XCOORD',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var Y = window.Blockly.JavaScript.valueToCode(
        this,
        'YCOORD',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    return '(' + object + ').setPosition(' + (X || '0') + ',' + (Y || '0') + ');\n';
};

window.Blockly.Blocks['object_move_position'] = {
    init: function () {
        this.setColour(160);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Move object by dx horizontally and dy vertically');
        this.appendValueInput('OBJECT')
            .setCheck(['Rectangle', 'Circle', 'Arc', 'Line', 'Oval', 'Text', 'Webimage'])
            .appendField('move:');
        this.appendDummyInput().appendField('by');
        this.appendValueInput('XDELTA')
            .setCheck('Number')
            .appendField('dx:')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendValueInput('YDELTA')
            .setCheck('Number')
            .appendField('dy:')
            .setAlign(window.Blockly.ALIGN_RIGHT);
    },
};

window.Blockly.JavaScript['object_move_position'] = function (block) {
    var object = window.Blockly.JavaScript.valueToCode(
        this,
        'OBJECT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (object === null || object === '') {
        return '';
    }
    var xDelta = window.Blockly.JavaScript.valueToCode(
        this,
        'XDELTA',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var yDelta = window.Blockly.JavaScript.valueToCode(
        this,
        'YDELTA',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    return '(' + object + ').move(' + (xDelta || '0') + ',' + (yDelta || '0') + ');\n';
};

window.Blockly.Blocks['canvas_get_color_preset'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Colour');
        this.setTooltip('Choose color preset');
        this.appendDummyInput()
            .appendField('color: ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['red', 'Color.RED'],
                    ['green', 'Color.GREEN'],
                    ['blue', 'Color.BLUE'],
                    ['yellow', 'Color.YELLOW'],
                    ['cyan', 'Color.CYAN'],
                    ['orange', 'Color.ORANGE'],
                    ['white', 'Color.WHITE'],
                    ['black', 'Color.BLACK'],
                    ['gray', 'Color.GRAY'],
                    ['purple', 'Color.PURPLE'],
                ]),
                'FIELDNAME'
            );
    },
};

window.Blockly.JavaScript['canvas_get_color_preset'] = function (block) {
    var code = block.getFieldValue('FIELDNAME');
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['make_color_rgb'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Colour');
        this.setTooltip('Make a color from red, green, and blue components');
        this.appendDummyInput().appendField('color with');
        this.appendValueInput('RED')
            .setCheck('Number')
            .appendField('red:')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendValueInput('GREEN')
            .setCheck('Number')
            .appendField('green:')
            .setAlign(window.Blockly.ALIGN_RIGHT);
        this.appendValueInput('BLUE')
            .setCheck('Number')
            .appendField('blue:')
            .setAlign(window.Blockly.ALIGN_RIGHT);
    },
};

window.Blockly.JavaScript['make_color_rgb'] = function (block) {
    var red = window.Blockly.JavaScript.valueToCode(
        this,
        'RED',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var green = window.Blockly.JavaScript.valueToCode(
        this,
        'GREEN',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var blue = window.Blockly.JavaScript.valueToCode(
        this,
        'BLUE',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var code =
        'new Color(' +
        (red ? Math.min(255, red) : '0') +
        ',' +
        (green ? Math.min(255, green) : '0') +
        ',' +
        (blue ? Math.min(255, blue) : '0') +
        ')';
    return [code, window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['object_set_color'] = {
    init: function () {
        this.setColour(160);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Set an object to a color');
        this.appendValueInput('OBJECT')
            .setCheck(['Rectangle', 'Circle', 'Arc', 'Line', 'Oval', 'Text'])
            .appendField('set :');
        this.appendValueInput('COLOUR')
            .setCheck('Colour')
            .appendField('to color:')
            .setAlign(window.Blockly.ALIGN_RIGHT);
    },
};

window.Blockly.JavaScript['object_set_color'] = function (block) {
    var object = window.Blockly.JavaScript.valueToCode(
        this,
        'OBJECT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (object === null || object === '') {
        return '';
    }
    var color = window.Blockly.JavaScript.valueToCode(
        this,
        'COLOUR',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    return '(' + object + ').setColor(' + color + ');\n';
};

window.Blockly.Blocks['circle_set_radius'] = {
    init: function () {
        this.setColour(160);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("set a circle's radius");
        this.appendValueInput('CIRCLE').setCheck('Circle').appendField('For circle ');
        this.appendValueInput('RADIUS').setCheck('Number').appendField('set radius:');
    },
};

window.Blockly.JavaScript['circle_set_radius'] = function (block) {
    var circle = window.Blockly.JavaScript.valueToCode(
        this,
        'CIRCLE',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (circle === null || circle === '') {
        return '';
    }
    var radius = window.Blockly.JavaScript.valueToCode(
        this,
        'RADIUS',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    return '(' + circle + ').setRadius(' + radius + ');\n';
};

window.Blockly.Blocks['line_set_endpoint'] = {
    init: function () {
        this.setColour(160);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Set line endpoint ');
        this.appendValueInput('LINE').setCheck('Line').appendField('For line ');
        this.appendDummyInput().appendField('set endpoint ');
        this.appendValueInput('X').setCheck('Number').appendField('x:');
        this.appendValueInput('Y').setCheck('Number').appendField('y:');
    },
};

window.Blockly.JavaScript['line_set_endpoint'] = function (block) {
    var line = window.Blockly.JavaScript.valueToCode(
        this,
        'LINE',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (line === null || line === '') {
        return '';
    }
    var x = window.Blockly.JavaScript.valueToCode(
        this,
        'X',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var y = window.Blockly.JavaScript.valueToCode(
        this,
        'Y',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    return '(' + line + ').setEndpoint(' + (x || 0) + ', ' + (y || 0) + ', ' + ');\n';
};

window.Blockly.Blocks['webimage_set_size'] = {
    init: function () {
        this.setColour(160);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Set webimage size');
        this.appendValueInput('IMAGE').setCheck('Webimage').appendField('For image ');
        this.appendValueInput('WIDTH').setCheck('Number').appendField('set width:');
        this.appendValueInput('HEIGHT').setCheck('Number').appendField('set height:');
    },
};

window.Blockly.JavaScript['webimage_set_size'] = function (block) {
    var image = window.Blockly.JavaScript.valueToCode(
        this,
        'IMAGE',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (image === null || image === '') {
        return '';
    }
    var width = window.Blockly.JavaScript.valueToCode(
        this,
        'WIDTH',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var height = window.Blockly.JavaScript.valueToCode(
        this,
        'HEIGHT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    return '(' + image + ').setSize(' + (width || 0) + ', ' + (height || 0) + ');\n';
};

window.Blockly.Blocks['add_object'] = {
    init: function () {
        this.setColour(160);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Add object to canvas');
        this.appendValueInput('OBJECT')
            .setCheck(['Rectangle', 'Circle', 'Arc', 'Line', 'Oval', 'Text', 'Webimage'])
            .appendField('add:');
    },
};

window.Blockly.JavaScript['add_object'] = function (block) {
    var object = window.Blockly.JavaScript.valueToCode(
        this,
        'OBJECT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );

    return 'add(' + object + ');\n';
};

window.Blockly.Blocks['remove_object'] = {
    init: function () {
        this.setColour(160);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Remove object from canvas');
        this.appendValueInput('OBJECT')
            .setCheck(['Rectangle', 'Circle', 'Arc', 'Line', 'Oval', 'Text', 'Webimage'])
            .appendField('remove:');
    },
};

window.Blockly.JavaScript['remove_object'] = function (block) {
    var object = window.Blockly.JavaScript.valueToCode(
        this,
        'OBJECT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );

    return 'remove(' + object + ');\n';
};

window.Blockly.Blocks['object_get_width'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Number');
        this.setTooltip('get width of object');
        this.appendValueInput('OBJECT')
            .setCheck(['Rectangle', 'Circle', 'Arc', 'Line', 'Text'])
            .appendField('get width of:');
    },
};

window.Blockly.JavaScript['object_get_width'] = function (block) {
    var object = window.Blockly.JavaScript.valueToCode(
        this,
        'OBJECT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (object === null || object === '') {
        return ['', window.Blockly.JavaScript.ORDER_ATOMIC];
    }
    return ['(' + object + ').getWidth()', window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['object_get_height'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Number');
        this.setTooltip('get height of object');
        this.appendValueInput('OBJECT')
            .setCheck(['Rectangle', 'Circle', 'Arc', 'Line', 'Text'])
            .appendField('get height of:');
    },
};

window.Blockly.JavaScript['object_get_height'] = function (block) {
    var object = window.Blockly.JavaScript.valueToCode(
        this,
        'OBJECT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (object === null || object === '') {
        return ['', window.Blockly.JavaScript.ORDER_ATOMIC];
    }
    return ['(' + object + ').getHeight()', window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['object_get_x'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Number');
        this.setTooltip('get x of object');
        this.appendValueInput('OBJECT')
            .setCheck(['Rectangle', 'Circle', 'Arc', 'Line', 'Text'])
            .appendField('get x of:');
    },
};

window.Blockly.JavaScript['object_get_x'] = function (block) {
    var object = window.Blockly.JavaScript.valueToCode(
        this,
        'OBJECT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (object === null || object === '') {
        return ['', window.Blockly.JavaScript.ORDER_ATOMIC];
    }
    return ['(' + object + ').getX();\n', window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['object_get_y'] = {
    init: function () {
        this.setColour(160);
        this.setOutput(true, 'Number');
        this.setTooltip('get y of object');
        this.appendValueInput('OBJECT')
            .setCheck(['Rectangle', 'Circle', 'Arc', 'Line', 'Text'])
            .appendField('get y of:');
    },
};

window.Blockly.JavaScript['object_get_y'] = function (block) {
    var object = window.Blockly.JavaScript.valueToCode(
        this,
        'OBJECT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (object === null || object === '') {
        return ['', window.Blockly.JavaScript.ORDER_ATOMIC];
    }
    return ['(' + object + ').getY();\n', window.Blockly.JavaScript.ORDER_ATOMIC];
};

window.Blockly.Blocks['object_rotate'] = {
    init: function () {
        this.setInputsInline(true);
        this.setColour(160);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.appendValueInput('OBJECT')
            .setCheck(['Rectangle', 'Circle', 'Arc', 'Oval', 'Text', 'Webimage'])
            .appendField('rotate:');
        this.appendValueInput('ANGLE').setCheck('Number').appendField('angle:');
        this.appendDummyInput()
            .appendField('using: ')
            .appendField(
                new window.Blockly.FieldDropdown([
                    ['degrees', 'degrees'],
                    ['radians', 'radians'],
                ]),
                'FIELDNAME'
            );
    },
};

window.Blockly.JavaScript['object_rotate'] = function (block) {
    var object = window.Blockly.JavaScript.valueToCode(
        this,
        'OBJECT',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    if (object === null || object === '') {
        return '';
    }
    var angle = window.Blockly.JavaScript.valueToCode(
        this,
        'ANGLE',
        window.Blockly.JavaScript.ORDER_ATOMIC
    );
    var angleUnit = block.getFieldValue('FIELDNAME') === 'degrees' ? 0 : 1;
    return '(' + object + ').setRotation(' + (angle || 0) + ', ' + (angleUnit || 0) + ');\n';
};

// HTML

window.Blockly.HTML['baseframe'] = function (block) {
    var statements_head = window.Blockly.HTML.statementToCode(block, 'head');
    var statements_body = window.Blockly.HTML.statementToCode(block, 'body');

    var code =
        '<!DOCTYPE HTML>\n<html>\n<head>\n  <meta charset="utf-8">\n' +
        statements_head +
        '</head>\n\n<body>\n' +
        statements_body +
        '</body>\n</html>\n';

    return code;
};

window.Blockly.HTML['html'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<!DOCTYPE HTML>\n<html>\n' + statements_content + '</html>\n';
    return code;
};

window.Blockly.HTML['body'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<body>\n' + statements_content + '</body>\n';
    return code;
};

window.Blockly.HTML['head'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<head>\n  <meta charset="utf-8">\n' + statements_content + '</head>\n';
    return code;
};

window.Blockly.HTML['title'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');

    if (statements_content != '') document.getElementById('title').innerText = statements_content;
    else document.getElementById('title').innerText = 'untitled web page';

    var code = '<title>' + statements_content.trim() + '</title>\n';
    return code;
};

window.Blockly.HTML['paragraph'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<p>\n' + statements_content + '</p>\n';
    return code;
};

window.Blockly.HTML['plaintext'] = function (block) {
    var text_content = block.getFieldValue('content');
    var code = text_content + '\n';
    return code;
};

window.Blockly.HTML['division'] = function (block) {
    var value_name = window.Blockly.HTML.valueToCode(
        block,
        'NAME',
        window.Blockly.HTML.ORDER_ATOMIC
    );
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<div' + value_name + '>\n' + statements_content + '</div>\n';
    return code;
};

window.Blockly.HTML['style'] = function (block) {
    var statements_name = window.Blockly.HTML.statementToCode(block, 'NAME');
    var code = ' style="' + statements_name.trim() + '"';
    return [code, window.Blockly.HTML.ORDER_NONE];
};

window.Blockly.HTML['color'] = function (block) {
    var colour_name = block.getFieldValue('NAME');
    var code = 'color: ' + colour_name + ';';
    return code;
};

window.Blockly.HTML['bgcolour'] = function (block) {
    var colour_name = block.getFieldValue('NAME');
    var code = 'background-color: ' + colour_name + ';';
    return code;
};

window.Blockly.HTML['genericstyle'] = function (block) {
    var text_property = block.getFieldValue('property');
    var text_value = block.getFieldValue('value');
    var code = text_property + ': ' + text_value + ';';
    return code;
};

window.Blockly.HTML['generictag'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var value_name = window.Blockly.HTML.valueToCode(
        block,
        'NAME',
        window.Blockly.HTML.ORDER_ATOMIC
    );
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<' + text_name + value_name + '>\n' + statements_content + '</' + text_name + '>\n';
    return code;
};

window.Blockly.HTML['more_attributes'] = function (block) {
    var value_name1 = window.Blockly.HTML.valueToCode(
        block,
        'NAME1',
        window.Blockly.HTML.ORDER_ATOMIC
    );
    var value_name2 = window.Blockly.HTML.valueToCode(
        block,
        'NAME2',
        window.Blockly.HTML.ORDER_ATOMIC
    );
    var value_name3 = window.Blockly.HTML.valueToCode(
        block,
        'NAME3',
        window.Blockly.HTML.ORDER_ATOMIC
    );
    var code = value_name1 + value_name2 + value_name3;
    return [code, window.Blockly.HTML.ORDER_NONE];
};

window.Blockly.HTML['genericattribute'] = function (block) {
    var text_attribute = block.getFieldValue('attribute');
    var text_value = block.getFieldValue('value');
    var code = ' ' + text_attribute + '="' + text_value + '"';
    return [code, window.Blockly.HTML.ORDER_NONE];
};

window.Blockly.HTML['link'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<a href="' + text_name + '">' + statements_content.trim() + '</a>\n';
    return code;
};

window.Blockly.HTML['span'] = function (block) {
    var value_name = window.Blockly.HTML.valueToCode(
        block,
        'NAME',
        window.Blockly.HTML.ORDER_ATOMIC
    );
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<span' + value_name + '>' + statements_content.trim() + '</span>\n';
    return code;
};

window.Blockly.HTML['image'] = function (block) {
    var text_image = block.getFieldValue('IMAGE');
    var text_alt = block.getFieldValue('ALT');
    var code = '<img src="' + text_image + '" alt="' + text_alt + '">\n';
    return code;
};

window.Blockly.HTML['emphasise'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<em>' + statements_content.trim() + '</em>\n';
    return code;
};

window.Blockly.HTML['strong'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<strong>' + statements_content.trim() + '</strong>\n';
    return code;
};

window.Blockly.HTML['headline'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<' + dropdown_name + '>' + statements_content.trim() + '</' + dropdown_name + '>\n';
    return code;
};

window.Blockly.HTML['linebreak'] = function (block) {
    var code = '<br>\n';
    return code;
};

window.Blockly.HTML['horizontalbreak'] = function (block) {
    var code = '<hr>\n';
    return code;
};

window.Blockly.HTML['unorderedlist'] = function (block) {
    var statements_name = window.Blockly.HTML.statementToCode(block, 'NAME');
    var code = '<ul>\n' + statements_name + '</ul>\n';
    return code;
};

window.Blockly.HTML['orderedlist'] = function (block) {
    var statements_name = window.Blockly.HTML.statementToCode(block, 'NAME');
    var code = '<ol>\n' + statements_name + '</ol>\n';
    return code;
};

window.Blockly.HTML['listelement'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<li>' + statements_content + '</li>\n';
    return code;
};

window.Blockly.HTML['inserted'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<ins>' + statements_content.trim() + '</ins>\n';
    return code;
};

window.Blockly.HTML['deleted'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<del>' + statements_content.trim() + '</del>\n';
    return code;
};

window.Blockly.HTML['super'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<sup>' + statements_content.trim() + '</sup>\n';
    return code;
};

window.Blockly.HTML['sub'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<sub>' + statements_content.trim() + '</sub>\n';
    return code;
};

window.Blockly.HTML['code'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<code>\n' + statements_content + '</code>\n';
    return code;
};

window.Blockly.HTML['quote'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<q>' + statements_content.trim() + '</q>\n';
    return code;
};

window.Blockly.HTML['blockquote'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<blockquote>\n' + statements_content + '</blockquote>\n';
    return code;
};

window.Blockly.HTML['sample'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<samp>\n' + statements_content + '</samp>\n';
    return code;
};

window.Blockly.HTML['keyboard'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<kbd>\n' + statements_content + '</kbd>\n';
    return code;
};

window.Blockly.HTML['variable'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<var>' + statements_content.trim() + '</var>\n';
    return code;
};

window.Blockly.HTML['form'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<form>\n' + statements_content + '</form>\n';
    return code;
};

window.Blockly.HTML['table'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<table>\n' + statements_content + '</table>\n';
    return code;
};

window.Blockly.HTML['tablerow'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<tr>\n' + statements_content + '</tr>\n';
    return code;
};

window.Blockly.HTML['tablecell'] = function (block) {
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<td>' + statements_content.trim() + '</td>\n';
    return code;
};

window.Blockly.HTML['input_text'] = function (block) {
    var text_default = block.getFieldValue('default');
    var code = '<input value="' + text_default + '">\n';
    return code;
};

window.Blockly.HTML['button'] = function (block) {
    var statements_name = window.Blockly.HTML.statementToCode(block, 'NAME');
    var code = '<button>' + statements_name.trim() + '</button>\n';
    return code;
};

window.Blockly.HTML['input'] = function (block) {
    var dropdown_type = block.getFieldValue('type');
    var text_value = block.getFieldValue('value');
    var value_text = window.Blockly.HTML.valueToCode(
        block,
        'text',
        window.Blockly.HTML.ORDER_ATOMIC
    );
    var code =
        '<input type="' + dropdown_type + '" value="' + text_value + '"' + value_text + ' />\n';
    return code;
};

window.Blockly.HTML['script'] = function (block) {
    var statements_content = window.Blockly.JavaScript.statementToCode(block, 'content');
    var code = '<script>\n' + statements_content + '</script>\n';
    return code;
};

window.Blockly.HTML['onclick'] = function (block) {
    var statements_name = window.Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = ' onclick="' + statements_name.trim() + '"';
    return [code, window.Blockly.HTML.ORDER_NONE];
};

window.Blockly.HTML['body_attributes'] = function (block) {
    var value_name = window.Blockly.HTML.valueToCode(
        block,
        'NAME',
        window.Blockly.HTML.ORDER_ATOMIC
    );
    var statements_content = window.Blockly.HTML.statementToCode(block, 'content');
    var code = '<body' + value_name + '>\n' + statements_content + '</body>\n';
    return code;
};
