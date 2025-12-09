gdjs.BattleFieldCode = {};
gdjs.BattleFieldCode.localVariables = [];
gdjs.BattleFieldCode.GDJumpObjects2_1final = [];

gdjs.BattleFieldCode.GDLeftObjects2_1final = [];

gdjs.BattleFieldCode.GDRightObjects2_1final = [];

gdjs.BattleFieldCode.GDGroundAndWallsObjects1= [];
gdjs.BattleFieldCode.GDGroundAndWallsObjects2= [];
gdjs.BattleFieldCode.GDGroundAndWallsObjects3= [];
gdjs.BattleFieldCode.GDGroundAndWallsObjects4= [];
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1= [];
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2= [];
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3= [];
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects4= [];
gdjs.BattleFieldCode.GDLeftObjects1= [];
gdjs.BattleFieldCode.GDLeftObjects2= [];
gdjs.BattleFieldCode.GDLeftObjects3= [];
gdjs.BattleFieldCode.GDLeftObjects4= [];
gdjs.BattleFieldCode.GDRightObjects1= [];
gdjs.BattleFieldCode.GDRightObjects2= [];
gdjs.BattleFieldCode.GDRightObjects3= [];
gdjs.BattleFieldCode.GDRightObjects4= [];
gdjs.BattleFieldCode.GDJumpObjects1= [];
gdjs.BattleFieldCode.GDJumpObjects2= [];
gdjs.BattleFieldCode.GDJumpObjects3= [];
gdjs.BattleFieldCode.GDJumpObjects4= [];
gdjs.BattleFieldCode.GDLv_95951PlayerObjects1= [];
gdjs.BattleFieldCode.GDLv_95951PlayerObjects2= [];
gdjs.BattleFieldCode.GDLv_95951PlayerObjects3= [];
gdjs.BattleFieldCode.GDLv_95951PlayerObjects4= [];
gdjs.BattleFieldCode.GDLv_95952PlayerObjects1= [];
gdjs.BattleFieldCode.GDLv_95952PlayerObjects2= [];
gdjs.BattleFieldCode.GDLv_95952PlayerObjects3= [];
gdjs.BattleFieldCode.GDLv_95952PlayerObjects4= [];
gdjs.BattleFieldCode.GDLv_95953PlayerObjects1= [];
gdjs.BattleFieldCode.GDLv_95953PlayerObjects2= [];
gdjs.BattleFieldCode.GDLv_95953PlayerObjects3= [];
gdjs.BattleFieldCode.GDLv_95953PlayerObjects4= [];
gdjs.BattleFieldCode.GDLv_95954PlayerObjects1= [];
gdjs.BattleFieldCode.GDLv_95954PlayerObjects2= [];
gdjs.BattleFieldCode.GDLv_95954PlayerObjects3= [];
gdjs.BattleFieldCode.GDLv_95954PlayerObjects4= [];


gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595951PlayerObjects3Objects = Hashtable.newFrom({"Lv_1Player": gdjs.BattleFieldCode.GDLv_95951PlayerObjects3});
gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595952PlayerObjects3Objects = Hashtable.newFrom({"Lv_2Player": gdjs.BattleFieldCode.GDLv_95952PlayerObjects3});
gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595953PlayerObjects3Objects = Hashtable.newFrom({"Lv_3Player": gdjs.BattleFieldCode.GDLv_95953PlayerObjects3});
gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595954PlayerObjects2Objects = Hashtable.newFrom({"Lv_4Player": gdjs.BattleFieldCode.GDLv_95954PlayerObjects2});
gdjs.BattleFieldCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2, gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3);

gdjs.BattleFieldCode.GDLv_95951PlayerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595951PlayerObjects3Objects, (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3[0].getCenterXInScene()), (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95951PlayerObjects3.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95951PlayerObjects3[i].activateBehavior("CancellableDraggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95951PlayerObjects3.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95951PlayerObjects3[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95951PlayerObjects3.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95951PlayerObjects3[i].activateBehavior("PlatformerObject", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2, gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3);

gdjs.BattleFieldCode.GDLv_95952PlayerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595952PlayerObjects3Objects, (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3[0].getCenterXInScene()), (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95952PlayerObjects3.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95952PlayerObjects3[i].activateBehavior("CancellableDraggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95952PlayerObjects3.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95952PlayerObjects3[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95952PlayerObjects3.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95952PlayerObjects3[i].activateBehavior("PlatformerObject", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2, gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3);

gdjs.BattleFieldCode.GDLv_95953PlayerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595953PlayerObjects3Objects, (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3[0].getCenterXInScene()), (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95953PlayerObjects3.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95953PlayerObjects3[i].activateBehavior("CancellableDraggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95953PlayerObjects3.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95953PlayerObjects3[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95953PlayerObjects3.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95953PlayerObjects3[i].activateBehavior("PlatformerObject", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2 */
gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595954PlayerObjects2Objects, (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2[0].getCenterXInScene()), (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95954PlayerObjects2[i].activateBehavior("CancellableDraggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95954PlayerObjects2[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95954PlayerObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


};gdjs.BattleFieldCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSlimeAnyLevelSpawnPoint"), gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2);
{for(var i = 0, len = gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2[i].hide();
}
}
{ //Subevents
gdjs.BattleFieldCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.BattleFieldCode.eventsList2 = function(runtimeScene) {

{

gdjs.BattleFieldCode.GDRightObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.BattleFieldCode.GDRightObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.BattleFieldCode.GDRightObjects3);
for (var i = 0, k = 0, l = gdjs.BattleFieldCode.GDRightObjects3.length;i<l;++i) {
    if ( gdjs.BattleFieldCode.GDRightObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.BattleFieldCode.GDRightObjects3[k] = gdjs.BattleFieldCode.GDRightObjects3[i];
        ++k;
    }
}
gdjs.BattleFieldCode.GDRightObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.BattleFieldCode.GDRightObjects3.length; j < jLen ; ++j) {
        if ( gdjs.BattleFieldCode.GDRightObjects2_1final.indexOf(gdjs.BattleFieldCode.GDRightObjects3[j]) === -1 )
            gdjs.BattleFieldCode.GDRightObjects2_1final.push(gdjs.BattleFieldCode.GDRightObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.BattleFieldCode.GDRightObjects2_1final, gdjs.BattleFieldCode.GDRightObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lv_1Player"), gdjs.BattleFieldCode.GDLv_95951PlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lv_2Player"), gdjs.BattleFieldCode.GDLv_95952PlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lv_3Player"), gdjs.BattleFieldCode.GDLv_95953PlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lv_4Player"), gdjs.BattleFieldCode.GDLv_95954PlayerObjects2);
{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95951PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95952PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95953PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95954PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.BattleFieldCode.GDLeftObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.BattleFieldCode.GDLeftObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.BattleFieldCode.GDLeftObjects3);
for (var i = 0, k = 0, l = gdjs.BattleFieldCode.GDLeftObjects3.length;i<l;++i) {
    if ( gdjs.BattleFieldCode.GDLeftObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.BattleFieldCode.GDLeftObjects3[k] = gdjs.BattleFieldCode.GDLeftObjects3[i];
        ++k;
    }
}
gdjs.BattleFieldCode.GDLeftObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.BattleFieldCode.GDLeftObjects3.length; j < jLen ; ++j) {
        if ( gdjs.BattleFieldCode.GDLeftObjects2_1final.indexOf(gdjs.BattleFieldCode.GDLeftObjects3[j]) === -1 )
            gdjs.BattleFieldCode.GDLeftObjects2_1final.push(gdjs.BattleFieldCode.GDLeftObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.BattleFieldCode.GDLeftObjects2_1final, gdjs.BattleFieldCode.GDLeftObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lv_1Player"), gdjs.BattleFieldCode.GDLv_95951PlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lv_2Player"), gdjs.BattleFieldCode.GDLv_95952PlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lv_3Player"), gdjs.BattleFieldCode.GDLv_95953PlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lv_4Player"), gdjs.BattleFieldCode.GDLv_95954PlayerObjects2);
{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95951PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95952PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95953PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95954PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{

gdjs.BattleFieldCode.GDJumpObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.BattleFieldCode.GDJumpObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.BattleFieldCode.GDJumpObjects3);
for (var i = 0, k = 0, l = gdjs.BattleFieldCode.GDJumpObjects3.length;i<l;++i) {
    if ( gdjs.BattleFieldCode.GDJumpObjects3[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.BattleFieldCode.GDJumpObjects3[k] = gdjs.BattleFieldCode.GDJumpObjects3[i];
        ++k;
    }
}
gdjs.BattleFieldCode.GDJumpObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.BattleFieldCode.GDJumpObjects3.length; j < jLen ; ++j) {
        if ( gdjs.BattleFieldCode.GDJumpObjects2_1final.indexOf(gdjs.BattleFieldCode.GDJumpObjects3[j]) === -1 )
            gdjs.BattleFieldCode.GDJumpObjects2_1final.push(gdjs.BattleFieldCode.GDJumpObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.BattleFieldCode.GDJumpObjects2_1final, gdjs.BattleFieldCode.GDJumpObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lv_1Player"), gdjs.BattleFieldCode.GDLv_95951PlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lv_2Player"), gdjs.BattleFieldCode.GDLv_95952PlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lv_3Player"), gdjs.BattleFieldCode.GDLv_95953PlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lv_4Player"), gdjs.BattleFieldCode.GDLv_95954PlayerObjects2);
{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95951PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95952PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95953PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95954PlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jump"), gdjs.BattleFieldCode.GDJumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.BattleFieldCode.GDLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.BattleFieldCode.GDRightObjects1);
{for(var i = 0, len = gdjs.BattleFieldCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLeftObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDRightObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDJumpObjects1.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDJumpObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.BattleFieldCode.eventsList3 = function(runtimeScene) {

{


gdjs.BattleFieldCode.eventsList1(runtimeScene);
}


{


gdjs.BattleFieldCode.eventsList2(runtimeScene);
}


};gdjs.BattleFieldCode.eventsList4 = function(runtimeScene) {

{


gdjs.BattleFieldCode.eventsList3(runtimeScene);
}


};

gdjs.BattleFieldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BattleFieldCode.GDGroundAndWallsObjects1.length = 0;
gdjs.BattleFieldCode.GDGroundAndWallsObjects2.length = 0;
gdjs.BattleFieldCode.GDGroundAndWallsObjects3.length = 0;
gdjs.BattleFieldCode.GDGroundAndWallsObjects4.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects4.length = 0;
gdjs.BattleFieldCode.GDLeftObjects1.length = 0;
gdjs.BattleFieldCode.GDLeftObjects2.length = 0;
gdjs.BattleFieldCode.GDLeftObjects3.length = 0;
gdjs.BattleFieldCode.GDLeftObjects4.length = 0;
gdjs.BattleFieldCode.GDRightObjects1.length = 0;
gdjs.BattleFieldCode.GDRightObjects2.length = 0;
gdjs.BattleFieldCode.GDRightObjects3.length = 0;
gdjs.BattleFieldCode.GDRightObjects4.length = 0;
gdjs.BattleFieldCode.GDJumpObjects1.length = 0;
gdjs.BattleFieldCode.GDJumpObjects2.length = 0;
gdjs.BattleFieldCode.GDJumpObjects3.length = 0;
gdjs.BattleFieldCode.GDJumpObjects4.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects4.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects4.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects4.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects4.length = 0;

gdjs.BattleFieldCode.eventsList4(runtimeScene);
gdjs.BattleFieldCode.GDGroundAndWallsObjects1.length = 0;
gdjs.BattleFieldCode.GDGroundAndWallsObjects2.length = 0;
gdjs.BattleFieldCode.GDGroundAndWallsObjects3.length = 0;
gdjs.BattleFieldCode.GDGroundAndWallsObjects4.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects4.length = 0;
gdjs.BattleFieldCode.GDLeftObjects1.length = 0;
gdjs.BattleFieldCode.GDLeftObjects2.length = 0;
gdjs.BattleFieldCode.GDLeftObjects3.length = 0;
gdjs.BattleFieldCode.GDLeftObjects4.length = 0;
gdjs.BattleFieldCode.GDRightObjects1.length = 0;
gdjs.BattleFieldCode.GDRightObjects2.length = 0;
gdjs.BattleFieldCode.GDRightObjects3.length = 0;
gdjs.BattleFieldCode.GDRightObjects4.length = 0;
gdjs.BattleFieldCode.GDJumpObjects1.length = 0;
gdjs.BattleFieldCode.GDJumpObjects2.length = 0;
gdjs.BattleFieldCode.GDJumpObjects3.length = 0;
gdjs.BattleFieldCode.GDJumpObjects4.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects4.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects4.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects4.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects4.length = 0;


return;

}

gdjs['BattleFieldCode'] = gdjs.BattleFieldCode;
