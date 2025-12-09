gdjs.ChestCode = {};
gdjs.ChestCode.localVariables = [];
gdjs.ChestCode.GDInventorySlotEmpty2Objects1= [];
gdjs.ChestCode.GDInventorySlotEmpty2Objects2= [];


gdjs.ChestCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "R2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.ChestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChestCode.GDInventorySlotEmpty2Objects1.length = 0;
gdjs.ChestCode.GDInventorySlotEmpty2Objects2.length = 0;

gdjs.ChestCode.eventsList0(runtimeScene);
gdjs.ChestCode.GDInventorySlotEmpty2Objects1.length = 0;
gdjs.ChestCode.GDInventorySlotEmpty2Objects2.length = 0;


return;

}

gdjs['ChestCode'] = gdjs.ChestCode;
