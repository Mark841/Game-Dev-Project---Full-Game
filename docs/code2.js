gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDStatsObjects1= [];
gdjs.Game_32OverCode.GDStatsObjects2= [];
gdjs.Game_32OverCode.GDMenuObjects1= [];
gdjs.Game_32OverCode.GDMenuObjects2= [];
gdjs.Game_32OverCode.GDPlayAgainObjects1= [];
gdjs.Game_32OverCode.GDPlayAgainObjects2= [];
gdjs.Game_32OverCode.GDQuitObjects1= [];
gdjs.Game_32OverCode.GDQuitObjects2= [];
gdjs.Game_32OverCode.GDDifficultyObjects1= [];
gdjs.Game_32OverCode.GDDifficultyObjects2= [];
gdjs.Game_32OverCode.GDKillBadgesObjects1= [];
gdjs.Game_32OverCode.GDKillBadgesObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32OverCode.conditionTrue_1 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_1 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.Game_32OverCode.GDMenuObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDPlayAgainObjects1Objects = Hashtable.newFrom({"PlayAgain": gdjs.Game_32OverCode.GDPlayAgainObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.Game_32OverCode.GDQuitObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDKillBadgesObjects1Objects = Hashtable.newFrom({"KillBadges": gdjs.Game_32OverCode.GDKillBadgesObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDKillBadgesObjects1Objects = Hashtable.newFrom({"KillBadges": gdjs.Game_32OverCode.GDKillBadgesObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDKillBadgesObjects1Objects = Hashtable.newFrom({"KillBadges": gdjs.Game_32OverCode.GDKillBadgesObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDKillBadgesObjects1Objects = Hashtable.newFrom({"KillBadges": gdjs.Game_32OverCode.GDKillBadgesObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.Game_32OverCode.GDStatsObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDStatsObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDStatsObjects1[i].setString("Time Survived: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) + "\nScore: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + "\nEnemies Killed: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) + " \nPower Ups Collected: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) + "\nWave Reached: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.Game_32OverCode.GDMenuObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.condition0IsTrue_1.val = false;
gdjs.Game_32OverCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_1.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDMenuObjects1Objects, runtimeScene, true, false);
}}
gdjs.Game_32OverCode.conditionTrue_1.val = true && gdjs.Game_32OverCode.condition0IsTrue_1.val && gdjs.Game_32OverCode.condition1IsTrue_1.val;
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.Game_32OverCode.GDPlayAgainObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.condition0IsTrue_1.val = false;
gdjs.Game_32OverCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_1.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDPlayAgainObjects1Objects, runtimeScene, false, false);
}}
gdjs.Game_32OverCode.conditionTrue_1.val = true && gdjs.Game_32OverCode.condition0IsTrue_1.val && gdjs.Game_32OverCode.condition1IsTrue_1.val;
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Game_32OverCode.GDQuitObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.condition0IsTrue_1.val = false;
gdjs.Game_32OverCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_1.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDQuitObjects1Objects, runtimeScene, false, false);
}}
gdjs.Game_32OverCode.conditionTrue_1.val = true && gdjs.Game_32OverCode.condition0IsTrue_1.val && gdjs.Game_32OverCode.condition1IsTrue_1.val;
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 11);
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11296292);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "background music.mp3", 11, true, 100, 1);
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.Game_32OverCode.GDDifficultyObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDDifficultyObjects1[i].setString("DIFFICULTY: VERY HARD");
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 3;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.Game_32OverCode.GDDifficultyObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDDifficultyObjects1[i].setString("DIFFICULTY: HARD");
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 5;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.Game_32OverCode.GDDifficultyObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDDifficultyObjects1[i].setString("DIFFICULTY: MEDIUM");
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 10;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.Game_32OverCode.GDDifficultyObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDDifficultyObjects1[i].setString("DIFFICULTY: EASY");
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 49;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.Game_32OverCode.GDKillBadgesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDKillBadgesObjects1Objects, 600, 250, "");
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 99;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.Game_32OverCode.GDKillBadgesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDKillBadgesObjects1Objects, 675, 250, "");
}{for(var i = 0, len = gdjs.Game_32OverCode.GDKillBadgesObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDKillBadgesObjects1[i].setAnimation(gdjs.Game_32OverCode.GDKillBadgesObjects1[i].getAnimation() + (1));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 199;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.Game_32OverCode.GDKillBadgesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDKillBadgesObjects1Objects, 600, 325, "");
}{for(var i = 0, len = gdjs.Game_32OverCode.GDKillBadgesObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDKillBadgesObjects1[i].setAnimation(gdjs.Game_32OverCode.GDKillBadgesObjects1[i].getAnimation() + (2));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 499;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.Game_32OverCode.GDKillBadgesObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDKillBadgesObjects1Objects, 675, 325, "");
}{for(var i = 0, len = gdjs.Game_32OverCode.GDKillBadgesObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDKillBadgesObjects1[i].setAnimation(gdjs.Game_32OverCode.GDKillBadgesObjects1[i].getAnimation() + (3));
}
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDStatsObjects1.length = 0;
gdjs.Game_32OverCode.GDStatsObjects2.length = 0;
gdjs.Game_32OverCode.GDMenuObjects1.length = 0;
gdjs.Game_32OverCode.GDMenuObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayAgainObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayAgainObjects2.length = 0;
gdjs.Game_32OverCode.GDQuitObjects1.length = 0;
gdjs.Game_32OverCode.GDQuitObjects2.length = 0;
gdjs.Game_32OverCode.GDDifficultyObjects1.length = 0;
gdjs.Game_32OverCode.GDDifficultyObjects2.length = 0;
gdjs.Game_32OverCode.GDKillBadgesObjects1.length = 0;
gdjs.Game_32OverCode.GDKillBadgesObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
