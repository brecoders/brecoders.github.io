gdjs.GameOverSceneCode = {};
gdjs.GameOverSceneCode.localVariables = [];
gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects1_1final = [];

gdjs.GameOverSceneCode.GDGameOverObjects1= [];
gdjs.GameOverSceneCode.GDGameOverObjects2= [];
gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects1= [];
gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2= [];


gdjs.GameOverSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("RedButtonWithStoneFrame"), gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2);
for (var i = 0, k = 0, l = gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2.length;i<l;++i) {
    if ( gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2[k] = gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2[i];
        ++k;
    }
}
gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects1_1final.indexOf(gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2[j]) === -1 )
            gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects1_1final.push(gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Square", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects1_1final, gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "gameoversound.mp3", false, 10, 1);
}}

}


};

gdjs.GameOverSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverSceneCode.GDGameOverObjects1.length = 0;
gdjs.GameOverSceneCode.GDGameOverObjects2.length = 0;
gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2.length = 0;

gdjs.GameOverSceneCode.eventsList0(runtimeScene);
gdjs.GameOverSceneCode.GDGameOverObjects1.length = 0;
gdjs.GameOverSceneCode.GDGameOverObjects2.length = 0;
gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects1.length = 0;
gdjs.GameOverSceneCode.GDRedButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['GameOverSceneCode'] = gdjs.GameOverSceneCode;
