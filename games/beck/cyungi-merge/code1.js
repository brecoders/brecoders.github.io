gdjs.BattleFieldCode = {};
gdjs.BattleFieldCode.localVariables = [];
gdjs.BattleFieldCode.GDGroundAndWallsObjects1= [];
gdjs.BattleFieldCode.GDGroundAndWallsObjects2= [];
gdjs.BattleFieldCode.GDGroundAndWallsObjects3= [];
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1= [];
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2= [];
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3= [];
gdjs.BattleFieldCode.GDLv_95951PlayerObjects1= [];
gdjs.BattleFieldCode.GDLv_95951PlayerObjects2= [];
gdjs.BattleFieldCode.GDLv_95951PlayerObjects3= [];
gdjs.BattleFieldCode.GDLv_95952PlayerObjects1= [];
gdjs.BattleFieldCode.GDLv_95952PlayerObjects2= [];
gdjs.BattleFieldCode.GDLv_95952PlayerObjects3= [];
gdjs.BattleFieldCode.GDLv_95953PlayerObjects1= [];
gdjs.BattleFieldCode.GDLv_95953PlayerObjects2= [];
gdjs.BattleFieldCode.GDLv_95953PlayerObjects3= [];
gdjs.BattleFieldCode.GDLv_95954PlayerObjects1= [];
gdjs.BattleFieldCode.GDLv_95954PlayerObjects2= [];
gdjs.BattleFieldCode.GDLv_95954PlayerObjects3= [];


gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595951PlayerObjects2Objects = Hashtable.newFrom({"Lv_1Player": gdjs.BattleFieldCode.GDLv_95951PlayerObjects2});
gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595952PlayerObjects2Objects = Hashtable.newFrom({"Lv_2Player": gdjs.BattleFieldCode.GDLv_95952PlayerObjects2});
gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595953PlayerObjects2Objects = Hashtable.newFrom({"Lv_3Player": gdjs.BattleFieldCode.GDLv_95953PlayerObjects2});
gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595954PlayerObjects1Objects = Hashtable.newFrom({"Lv_4Player": gdjs.BattleFieldCode.GDLv_95954PlayerObjects1});
gdjs.BattleFieldCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1, gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2);

gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595951PlayerObjects2Objects, (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2[0].getCenterXInScene()), (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2[0].getCenterXInScene()), "");
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95951PlayerObjects2[i].activateBehavior("CancellableDraggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95951PlayerObjects2[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95951PlayerObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1, gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2);

gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595952PlayerObjects2Objects, (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2[0].getCenterXInScene()), (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2[0].getCenterXInScene()), "");
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95952PlayerObjects2[i].activateBehavior("CancellableDraggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95952PlayerObjects2[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95952PlayerObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1, gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2);

gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595953PlayerObjects2Objects, (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2[0].getCenterXInScene()), (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2[0].getCenterXInScene()), "");
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95953PlayerObjects2[i].activateBehavior("CancellableDraggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95953PlayerObjects2[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95953PlayerObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
/* Reuse gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1 */
gdjs.BattleFieldCode.GDLv_95954PlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.BattleFieldCode.mapOfGDgdjs_9546BattleFieldCode_9546GDLv_959595954PlayerObjects1Objects, (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1[0].getCenterXInScene()), (( gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1.length === 0 ) ? 0 :gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1[0].getCenterXInScene()), "");
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95954PlayerObjects1.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95954PlayerObjects1[i].activateBehavior("CancellableDraggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95954PlayerObjects1.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95954PlayerObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.BattleFieldCode.GDLv_95954PlayerObjects1.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDLv_95954PlayerObjects1[i].activateBehavior("PlatformerObject", true);
}
}}

}


};gdjs.BattleFieldCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSlimeAnyLevelSpawnPoint"), gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1);
{for(var i = 0, len = gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1.length ;i < len;++i) {
    gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1[i].hide();
}
}
{ //Subevents
gdjs.BattleFieldCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.BattleFieldCode.eventsList2 = function(runtimeScene) {

{


gdjs.BattleFieldCode.eventsList1(runtimeScene);
}


};gdjs.BattleFieldCode.eventsList3 = function(runtimeScene) {

{


gdjs.BattleFieldCode.eventsList2(runtimeScene);
}


};

gdjs.BattleFieldCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BattleFieldCode.GDGroundAndWallsObjects1.length = 0;
gdjs.BattleFieldCode.GDGroundAndWallsObjects2.length = 0;
gdjs.BattleFieldCode.GDGroundAndWallsObjects3.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects3.length = 0;

gdjs.BattleFieldCode.eventsList3(runtimeScene);
gdjs.BattleFieldCode.GDGroundAndWallsObjects1.length = 0;
gdjs.BattleFieldCode.GDGroundAndWallsObjects2.length = 0;
gdjs.BattleFieldCode.GDGroundAndWallsObjects3.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects1.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects2.length = 0;
gdjs.BattleFieldCode.GDPlayerSlimeAnyLevelSpawnPointObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95951PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95952PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95953PlayerObjects3.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects1.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects2.length = 0;
gdjs.BattleFieldCode.GDLv_95954PlayerObjects3.length = 0;


return;

}

gdjs['BattleFieldCode'] = gdjs.BattleFieldCode;
