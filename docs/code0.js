gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDTitleObjects1= [];
gdjs.Main_32MenuCode.GDTitleObjects2= [];
gdjs.Main_32MenuCode.GDPlayObjects1= [];
gdjs.Main_32MenuCode.GDPlayObjects2= [];
gdjs.Main_32MenuCode.GDControlsObjects1= [];
gdjs.Main_32MenuCode.GDControlsObjects2= [];
gdjs.Main_32MenuCode.GDMoveKeysObjects1= [];
gdjs.Main_32MenuCode.GDMoveKeysObjects2= [];
gdjs.Main_32MenuCode.GDShootKeysObjects1= [];
gdjs.Main_32MenuCode.GDShootKeysObjects2= [];
gdjs.Main_32MenuCode.GDKnockbackAbilityKeysObjects1= [];
gdjs.Main_32MenuCode.GDKnockbackAbilityKeysObjects2= [];
gdjs.Main_32MenuCode.GDGrenadeKeysObjects1= [];
gdjs.Main_32MenuCode.GDGrenadeKeysObjects2= [];
gdjs.Main_32MenuCode.GDPauseKeysObjects1= [];
gdjs.Main_32MenuCode.GDPauseKeysObjects2= [];
gdjs.Main_32MenuCode.GDBackToMenuKeysObjects1= [];
gdjs.Main_32MenuCode.GDBackToMenuKeysObjects2= [];
gdjs.Main_32MenuCode.GDMuteKeyObjects1= [];
gdjs.Main_32MenuCode.GDMuteKeyObjects2= [];
gdjs.Main_32MenuCode.GDQuitObjects1= [];
gdjs.Main_32MenuCode.GDQuitObjects2= [];
gdjs.Main_32MenuCode.GDGodControlsObjects1= [];
gdjs.Main_32MenuCode.GDGodControlsObjects2= [];
gdjs.Main_32MenuCode.GDGodPopUpObjects1= [];
gdjs.Main_32MenuCode.GDGodPopUpObjects2= [];
gdjs.Main_32MenuCode.GDButtonObjects1= [];
gdjs.Main_32MenuCode.GDButtonObjects2= [];
gdjs.Main_32MenuCode.GDDifficultyObjects1= [];
gdjs.Main_32MenuCode.GDDifficultyObjects2= [];
gdjs.Main_32MenuCode.GDNewObjectObjects1= [];
gdjs.Main_32MenuCode.GDNewObjectObjects2= [];
gdjs.Main_32MenuCode.GDDescriptionObjects1= [];
gdjs.Main_32MenuCode.GDDescriptionObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition4IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition3IsTrue_1 = {val:false};
gdjs.Main_32MenuCode.condition4IsTrue_1 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.Main_32MenuCode.GDPlayObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.Main_32MenuCode.GDQuitObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.Main_32MenuCode.GDButtonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.Main_32MenuCode.GDButtonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDescriptionObjects1Objects = Hashtable.newFrom({"Description": gdjs.Main_32MenuCode.GDDescriptionObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDifficultyObjects1Objects = Hashtable.newFrom({"Difficulty": gdjs.Main_32MenuCode.GDDifficultyObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDifficultyObjects1Objects = Hashtable.newFrom({"Difficulty": gdjs.Main_32MenuCode.GDDifficultyObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDifficultyObjects1Objects = Hashtable.newFrom({"Difficulty": gdjs.Main_32MenuCode.GDDifficultyObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDifficultyObjects1Objects = Hashtable.newFrom({"Difficulty": gdjs.Main_32MenuCode.GDDifficultyObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.Main_32MenuCode.GDPlayObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}}
gdjs.Main_32MenuCode.conditionTrue_1.val = true && gdjs.Main_32MenuCode.condition0IsTrue_1.val && gdjs.Main_32MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.Main_32MenuCode.GDQuitObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}}
gdjs.Main_32MenuCode.conditionTrue_1.val = true && gdjs.Main_32MenuCode.condition0IsTrue_1.val && gdjs.Main_32MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.Main_32MenuCode.GDButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition3IsTrue_1.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition1IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Showing")) == 0;
}if ( gdjs.Main_32MenuCode.condition2IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition3IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "Clicked");
}}
}
}
gdjs.Main_32MenuCode.conditionTrue_1.val = true && gdjs.Main_32MenuCode.condition0IsTrue_1.val && gdjs.Main_32MenuCode.condition1IsTrue_1.val && gdjs.Main_32MenuCode.condition2IsTrue_1.val && gdjs.Main_32MenuCode.condition3IsTrue_1.val;
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Description"), gdjs.Main_32MenuCode.GDDescriptionObjects1);
gdjs.copyArray(runtimeScene.getObjects("GodControls"), gdjs.Main_32MenuCode.GDGodControlsObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDGodControlsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDGodControlsObjects1[i].setOpacity(255);
}
}{runtimeScene.getVariables().get("Showing").setNumber(1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDButtonObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clicked");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDescriptionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.Main_32MenuCode.GDButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition3IsTrue_1.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Main_32MenuCode.condition1IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition2IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Showing")) == 1;
}if ( gdjs.Main_32MenuCode.condition2IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition3IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "Clicked");
}}
}
}
gdjs.Main_32MenuCode.conditionTrue_1.val = true && gdjs.Main_32MenuCode.condition0IsTrue_1.val && gdjs.Main_32MenuCode.condition1IsTrue_1.val && gdjs.Main_32MenuCode.condition2IsTrue_1.val && gdjs.Main_32MenuCode.condition3IsTrue_1.val;
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("GodControls"), gdjs.Main_32MenuCode.GDGodControlsObjects1);
gdjs.Main_32MenuCode.GDDescriptionObjects1.length = 0;

{for(var i = 0, len = gdjs.Main_32MenuCode.GDGodControlsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDGodControlsObjects1[i].setOpacity(0);
}
}{runtimeScene.getVariables().get("Showing").setNumber(0);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDButtonObjects1[i].setAnimation(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clicked");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDescriptionObjects1Objects, 450, 300, "");
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackToMenuKeys"), gdjs.Main_32MenuCode.GDBackToMenuKeysObjects1);
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.Main_32MenuCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GodControls"), gdjs.Main_32MenuCode.GDGodControlsObjects1);
gdjs.copyArray(runtimeScene.getObjects("GrenadeKeys"), gdjs.Main_32MenuCode.GDGrenadeKeysObjects1);
gdjs.copyArray(runtimeScene.getObjects("KnockbackAbilityKeys"), gdjs.Main_32MenuCode.GDKnockbackAbilityKeysObjects1);
gdjs.copyArray(runtimeScene.getObjects("MoveKeys"), gdjs.Main_32MenuCode.GDMoveKeysObjects1);
gdjs.copyArray(runtimeScene.getObjects("MuteKey"), gdjs.Main_32MenuCode.GDMuteKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("PauseKeys"), gdjs.Main_32MenuCode.GDPauseKeysObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShootKeys"), gdjs.Main_32MenuCode.GDShootKeysObjects1);
{runtimeScene.getVariables().get("TitleScale").setNumber(0.005);
}{runtimeScene.getVariables().get("TitleRotate").setNumber(5);
}{runtimeScene.getVariables().get("Started").setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "StartAlternating");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Alternate");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMoveKeysObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMoveKeysObjects1[i].setScale(0.5);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDShootKeysObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDShootKeysObjects1[i].setScale(0.75);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDKnockbackAbilityKeysObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDKnockbackAbilityKeysObjects1[i].setScale(0.75);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDGrenadeKeysObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDGrenadeKeysObjects1[i].setScale(0.5);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDPauseKeysObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPauseKeysObjects1[i].setScale(0.5);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDBackToMenuKeysObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBackToMenuKeysObjects1[i].setScale(0.5);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMuteKeyObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMuteKeyObjects1[i].setScale(0.5);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDButtonObjects1[i].setScale(2);
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDGodControlsObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDGodControlsObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 10);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5), false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition1IsTrue_0;
gdjs.Main_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10403812);
}
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "background music.mp3", 10, true, 100, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Main_32MenuCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTitleObjects1[i].setScale(gdjs.Main_32MenuCode.GDTitleObjects1[i].getScale() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("TitleScale"))));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTitleObjects1[i].rotate(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("TitleRotate")), runtimeScene);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "StartAlternating");
}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Started")) == 0;
}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("TitleRotate").setNumber(-(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("TitleRotate"))));
}{runtimeScene.getVariables().get("TitleScale").setNumber(-(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("TitleScale"))));
}{runtimeScene.getVariables().get("Started").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Alternate");
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "Alternate");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("TitleRotate").setNumber(-(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("TitleRotate"))));
}{runtimeScene.getVariables().get("TitleScale").setNumber(-(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("TitleScale"))));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Alternate");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.Main_32MenuCode.GDDifficultyObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition3IsTrue_1.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDifficultyObjects1Objects, runtimeScene, false, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition2IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "Clicked");
}if ( gdjs.Main_32MenuCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDifficultyObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDifficultyObjects1[i].getString() == "DIFFICULTY: EASY" ) {
        gdjs.Main_32MenuCode.condition3IsTrue_1.val = true;
        gdjs.Main_32MenuCode.GDDifficultyObjects1[k] = gdjs.Main_32MenuCode.GDDifficultyObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDifficultyObjects1.length = k;}}
}
}
gdjs.Main_32MenuCode.conditionTrue_1.val = true && gdjs.Main_32MenuCode.condition0IsTrue_1.val && gdjs.Main_32MenuCode.condition1IsTrue_1.val && gdjs.Main_32MenuCode.condition2IsTrue_1.val && gdjs.Main_32MenuCode.condition3IsTrue_1.val;
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDDifficultyObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clicked");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDifficultyObjects1[i].setString("DIFFICULTY: MEDIUM");
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(70);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0.2);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(360);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(60);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.Main_32MenuCode.GDDifficultyObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition3IsTrue_1.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDifficultyObjects1Objects, runtimeScene, false, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition2IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "Clicked");
}if ( gdjs.Main_32MenuCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDifficultyObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDifficultyObjects1[i].getString() == "DIFFICULTY: MEDIUM" ) {
        gdjs.Main_32MenuCode.condition3IsTrue_1.val = true;
        gdjs.Main_32MenuCode.GDDifficultyObjects1[k] = gdjs.Main_32MenuCode.GDDifficultyObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDifficultyObjects1.length = k;}}
}
}
gdjs.Main_32MenuCode.conditionTrue_1.val = true && gdjs.Main_32MenuCode.condition0IsTrue_1.val && gdjs.Main_32MenuCode.condition1IsTrue_1.val && gdjs.Main_32MenuCode.condition2IsTrue_1.val && gdjs.Main_32MenuCode.condition3IsTrue_1.val;
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDDifficultyObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clicked");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDifficultyObjects1[i].setString("DIFFICULTY: HARD");
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(35);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0.4);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(180);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(45);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.Main_32MenuCode.GDDifficultyObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition3IsTrue_1.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDifficultyObjects1Objects, runtimeScene, false, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition2IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "Clicked");
}if ( gdjs.Main_32MenuCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDifficultyObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDifficultyObjects1[i].getString() == "DIFFICULTY: HARD" ) {
        gdjs.Main_32MenuCode.condition3IsTrue_1.val = true;
        gdjs.Main_32MenuCode.GDDifficultyObjects1[k] = gdjs.Main_32MenuCode.GDDifficultyObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDifficultyObjects1.length = k;}}
}
}
gdjs.Main_32MenuCode.conditionTrue_1.val = true && gdjs.Main_32MenuCode.condition0IsTrue_1.val && gdjs.Main_32MenuCode.condition1IsTrue_1.val && gdjs.Main_32MenuCode.condition2IsTrue_1.val && gdjs.Main_32MenuCode.condition3IsTrue_1.val;
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDDifficultyObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clicked");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDifficultyObjects1[i].setString("DIFFICULTY: VERY HARD");
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(35);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0.8);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(180);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(30);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Difficulty"), gdjs.Main_32MenuCode.GDDifficultyObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Main_32MenuCode.conditionTrue_1 = gdjs.Main_32MenuCode.condition0IsTrue_0;
gdjs.Main_32MenuCode.condition0IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition2IsTrue_1.val = false;
gdjs.Main_32MenuCode.condition3IsTrue_1.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDDifficultyObjects1Objects, runtimeScene, false, false);
}if ( gdjs.Main_32MenuCode.condition0IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Main_32MenuCode.condition1IsTrue_1.val ) {
{
gdjs.Main_32MenuCode.condition2IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "Clicked");
}if ( gdjs.Main_32MenuCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDDifficultyObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDDifficultyObjects1[i].getString() == "DIFFICULTY: VERY HARD" ) {
        gdjs.Main_32MenuCode.condition3IsTrue_1.val = true;
        gdjs.Main_32MenuCode.GDDifficultyObjects1[k] = gdjs.Main_32MenuCode.GDDifficultyObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDDifficultyObjects1.length = k;}}
}
}
gdjs.Main_32MenuCode.conditionTrue_1.val = true && gdjs.Main_32MenuCode.condition0IsTrue_1.val && gdjs.Main_32MenuCode.condition1IsTrue_1.val && gdjs.Main_32MenuCode.condition2IsTrue_1.val && gdjs.Main_32MenuCode.condition3IsTrue_1.val;
}
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDDifficultyObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Clicked");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDDifficultyObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDDifficultyObjects1[i].setString("DIFFICULTY: EASY");
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(10);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(140);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0.1);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(720);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(90);
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(5));
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayObjects2.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects1.length = 0;
gdjs.Main_32MenuCode.GDControlsObjects2.length = 0;
gdjs.Main_32MenuCode.GDMoveKeysObjects1.length = 0;
gdjs.Main_32MenuCode.GDMoveKeysObjects2.length = 0;
gdjs.Main_32MenuCode.GDShootKeysObjects1.length = 0;
gdjs.Main_32MenuCode.GDShootKeysObjects2.length = 0;
gdjs.Main_32MenuCode.GDKnockbackAbilityKeysObjects1.length = 0;
gdjs.Main_32MenuCode.GDKnockbackAbilityKeysObjects2.length = 0;
gdjs.Main_32MenuCode.GDGrenadeKeysObjects1.length = 0;
gdjs.Main_32MenuCode.GDGrenadeKeysObjects2.length = 0;
gdjs.Main_32MenuCode.GDPauseKeysObjects1.length = 0;
gdjs.Main_32MenuCode.GDPauseKeysObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackToMenuKeysObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackToMenuKeysObjects2.length = 0;
gdjs.Main_32MenuCode.GDMuteKeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDMuteKeyObjects2.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects1.length = 0;
gdjs.Main_32MenuCode.GDQuitObjects2.length = 0;
gdjs.Main_32MenuCode.GDGodControlsObjects1.length = 0;
gdjs.Main_32MenuCode.GDGodControlsObjects2.length = 0;
gdjs.Main_32MenuCode.GDGodPopUpObjects1.length = 0;
gdjs.Main_32MenuCode.GDGodPopUpObjects2.length = 0;
gdjs.Main_32MenuCode.GDButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDDifficultyObjects1.length = 0;
gdjs.Main_32MenuCode.GDDifficultyObjects2.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects1.length = 0;
gdjs.Main_32MenuCode.GDNewObjectObjects2.length = 0;
gdjs.Main_32MenuCode.GDDescriptionObjects1.length = 0;
gdjs.Main_32MenuCode.GDDescriptionObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
