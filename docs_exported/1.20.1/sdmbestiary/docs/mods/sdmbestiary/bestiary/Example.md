```zenscript
import mods.sdmbestiary.bestiary.BestiaryUtils;
import mods.sdmbestiary.bestiary.api.content.tab.TextTab;
import crafttweaker.api.text.Component;
import mods.sdmbestiary.bestiary.api.content.InfoContent;
import mods.sdmbestiary.bestiary.api.content.info.HeaderInfo;
import mods.sdmbestiary.bestiary.api.content.info.TextInfo;
import mods.sdmbestiary.bestiary.api.content.info.ImageInfo;
import mods.sdmbestiary.bestiary.api.content.info.ButtonInfo;
import mods.sdmbestiary.bestiary.api.content.info.ButtonItemInfo;
import mods.sdmbestiary.bestiary.api.content.tab.ItemTab;
import mods.sdmbestiary.bestiary.api.content.tab.TextFieldTab;
import mods.sdmbestiary.bestiary.api.content.tab.Group;
import mods.sdmbestiary.bestiary.api.content.graphics.DrawColor;
import mods.sdmbestiary.bestiary.api.content.graphics.DrawReact;
import mods.sdmbestiary.bestiary.api.content.info.EntityInfo;

public class goldResourcesExample{

    public static rawGold() as void{
        var goldOreGroup = new ItemTab(/*NAME ->*/ Component.literal("Raw Gold"), /*ICON ->*/<item:minecraft:raw_gold>,/*ID ->*/ "rawgold");
        //Add icon to group
        goldOreGroup.setIcon(BestiaryUtils.createIcon(<item:minecraft:raw_gold>));
        //Create Info Panel
        var goldOreInfo = new InfoContent(panel => {
            /*Spaces between widgets. If you do not plan to do everything in a column, then it is recommended to set the value to 0*/
            panel.space = 10;

            //Adding an Icon
            panel.addContent(new ImageInfo(image => {
                //The texture of the icon will be taken from the Raw Gold item
                image.icon = BestiaryUtils.createIcon(<item:minecraft:raw_gold>);
                //if the value is true, then you will see the borders of the widget.
                image.isDrawBackGround = false;
                //Sizes
                image.weight = 48;
                image.height = 48;

                //Offset from 0 coordinates and the space parameter
                image.addPos(1,1);
            }));

            //Adding a header
            panel.addContent(new HeaderInfo(header => {
                header.text = Component.literal("Рудное Золото.").withStyle(<constant:minecraft:formatting:gold>);
                //Offset from 0 coordinates and the space parameter
                header.addPos(51, -8);
                //if the value is true, then you will see the borders of the widget.
                header.isDrawBackGround = false;
                //The size of the widget borders
                header.setSize(83, 8);
            }));  

            //A text field.
            panel.addContent(new TextInfo(textInfo => {
                //Adding lines
                textInfo.addLine(Component.literal("A resource that is not useless in itself."));
                textInfo.addLine(Component.literal("To use it, you need to process it."));
                //Offset from 0 coordinates and the space parameter
                textInfo.addPos(51, -6);
                //if the value is true, then you will see the borders of the widget.
                textInfo.isDrawBackGround = false;
                //The size of the widget borders
                textInfo.setSize(400, 35);
            }));

            //Adding a header
            panel.addContent(new HeaderInfo(header => {
                header.text = Component.literal("Способ получения").withStyle(<constant:minecraft:formatting:gold>);
                //Offset from 0 coordinates and the space parameter
                header.addPos(2, 0);
                //if the value is true, then you will see the borders of the widget.
                header.isDrawBackGround = false;
                //The size of the widget borders
                header.setSize(48, 8);
            })); 

            //Adding Button
            //This is a button with an object. The object will be written on hover. If you wish, you can change the text on hover.
            panel.addContent(new ButtonItemInfo(button => {
                //Item
                button.item = <item:minecraft:gold_ore>;
                //The link to the tab. Enter the ID that you assigned to the tab.
                button.clickURL = "";
                //Weight
                button.w = 70;
                //Offset from 0 coordinates and the space parameter
                button.addPos(1, 0);
                //Text on hover
                button.componentText.add(<item:minecraft:gold_ore>.hoverName);
            }));
            panel.addContent(new ButtonItemInfo(button => {
                //Item
                button.item = <item:minecraft:deepslate_gold_ore>;
                //The link to the tab. Enter the ID that you assigned to the tab.
                button.clickURL = "";
                //Offset from 0 coordinates and the space parameter
                button.addPos(85, -26);
                //Text on hover
                button.componentText.add(<item:minecraft:deepslate_gold_ore>.hoverName);
            }));
            //Adding a header
            panel.addContent(new HeaderInfo(header => {
                header.text = Component.literal("Using").withStyle(<constant:minecraft:formatting:gold>);
                //Offset from 0 coordinates and the space parameter
                header.addPos(2, -34);
                //if the value is true, then you will see the borders of the widget.
                header.isDrawBackGround = false;
                //The size of the widget borders
                header.setSize(58, 8);
            })); 

            //Adding Button
            //This is a button with an object. The object will be written on hover. If you wish, you can change the text on hover.
            panel.addContent(new ButtonItemInfo(button => {
                button.item = <item:minecraft:gold_ingot>;
                //The link to the tab. Enter the ID that you assigned to the tab.
                button.clickURL = "goldIngot";
                //Weight
                button.w = 70;
                //Offset from 0 coordinates and the space parameter
                button.addPos(1, -35);
                //Text on hover
                button.componentText.add(<item:minecraft:gold_ingot>.hoverName);
            }));
            panel.addContent(new ButtonItemInfo(button => {
                button.item = <item:minecraft:raw_gold_block>;
                button.clickURL = "";
                button.addPos(92, -61);
                button.componentText.add(<item:minecraft:raw_gold_block>.hoverName);
            }));

        });

        //Adding an Information Panel to a tab
        goldOreGroup.addInfoContent(goldOreInfo);
        //Register new Tab
        BestiaryUtils.createGroup(goldOreGroup);
    }

    public static goldIngot() as void{
        var goldOreGroup = new TextTab(/*NAME ->*/ Component.literal("Gold Ingot"), /*ID ->*/"goldIngot");
        //Create Info Panel
        var goldOreInfo = new InfoContent(panel => {
            /*Spaces between widgets. If you do not plan to do everything in a column, then it is recommended to set the value to 0*/
            panel.space = 10;

            //Creates a color fill
            panel.addContent(new DrawColor(color => {
                color.setColor(44,38,54);
                //The size of the widget borders
                color.setSize(258,30);
                //Offset from 0 coordinates and the space parameter
                color.addPos(50,14);
            }));
            //Creates an outline
            panel.addContent(new DrawReact(color => {
                color.setColor(139, 0, 139);
                //The size of the widget borders
                color.setSize(258,30);
                //Offset from 0 coordinates and the space parameter
                color.addPos(50,14);
            }));

            //Creates a creature display
            panel.addContent(new EntityInfo(entity => {
                //Entity
                entity.entityType = <entitytype:minecraft:witch>;
                //The size of the model
                entity.size = 20;
                //Offset from 0 coordinates and the space parameter
                entity.addPos(20, 100);
                //Model rotation
                entity.yaw = -30;
            }));

            //Creates a creature display
            panel.addContent(new EntityInfo(entity => {
                //Entity
                entity.entityType = <entitytype:minecraft:witch>;
                //The size of the model
                entity.size = 20;
                //Offset from 0 coordinates and the space parameter
                entity.addPos(50, 100);
                //Model rotation
                entity.yaw = 30;
            }));

            //Adding an Icon
            panel.addContent(new ImageInfo(image => {
                //The texture of the icon will be taken from the Raw Gold item
                image.icon = BestiaryUtils.createIcon(<item:minecraft:gold_ingot>);
                //if the value is true, then you will see the borders of the widget.
                image.isDrawBackGround = false;
                //Sizes
                image.weight = 48;
                image.height = 48;
                //Offset from 0 coordinates and the space parameter
                image.addPos(1,1);
            }));
            //Adding a header
            panel.addContent(new HeaderInfo(header => {
                header.text = Component.literal("Gold Ingot").withStyle(<constant:minecraft:formatting:gold>);
                //Offset from 0 coordinates and the space parameter
                header.addPos(51, -8);
                //if the value is true, then you will see the borders of the widget.
                header.isDrawBackGround = false;
                //The size of the widget borders
                header.setSize(83, 8);
            }));  
            //A text field.
            panel.addContent(new TextInfo(textInfo => {
                //Adding lines
                textInfo.addLine(Component.literal("One of the most valuable materials that has excellent"));
                textInfo.addLine(Component.literal("conductivity and magical potential."));
                textInfo.addLine(Component.literal("In some dimensions it is used as a currency."));
                //Offset from 0 coordinates and the space parameter
                textInfo.addPos(51, -6);
                //if the value is true, then you will see the borders of the widget.
                textInfo.isDrawBackGround = false;
                //The size of the widget borders
                textInfo.setSize(400, 35);
            }));
            //Adding a header
            panel.addContent(new HeaderInfo(header => {
                header.text = Component.literal("Способ получения").withStyle(<constant:minecraft:formatting:gold>);
                header.addPos(2, -10);
                header.isDrawBackGround = false;
                header.setSize(48, 8);
            })); 
            //Adding Button
            //This is a button with an object. The object will be written on hover. If you wish, you can change the text on hover.
            panel.addContent(new ButtonItemInfo(button => {
                //Item
                button.item = <item:minecraft:raw_gold>;
                //The link to the tab. Enter the ID that you assigned to the tab.
                button.clickURL = "goldOre";
                //Weight
                button.w = 70;
                //Offset from 0 coordinates and the space parameter
                button.addPos(1, -10);
                //Text on hover
                button.componentText.add(<item:minecraft:raw_gold>.hoverName);
            }));
        
            panel.addContent(new HeaderInfo(header => {
                header.text = Component.literal("Используется").withStyle(<constant:minecraft:formatting:gold>);
                //Offset from 0 coordinates and the space parameter
                header.addPos(2, -18);
                //if the value is true, then you will see the borders of the widget.
                header.isDrawBackGround = false;
                //The size of the widget borders
                header.setSize(58, 8);
            })); 
            //Adding Button
            //This is a button with an object. The object will be written on hover. If you wish, you can change the text on hover.
            panel.addContent(new ButtonItemInfo(button => {
                button.item = <item:minecraft:golden_sword>;
                //The link to the tab. Enter the ID that you assigned to the tab.
                button.clickURL = "1";
                //Weight
                button.w = 70;
                //Offset from 0 coordinates and the space parameter
                button.addPos(1, -19);
                //Text on hover
                button.componentText.add(<item:minecraft:golden_sword>.hoverName);
            }));
            panel.addContent(new ButtonItemInfo(button => {
                button.item = <item:minecraft:golden_pickaxe>;
                button.clickURL = "1";
                button.addPos(92, -45);
                button.componentText.add(<item:minecraft:golden_pickaxe>.hoverName);
            }));

        });
        //Adding an Information Panel to a tab
        goldOreGroup.addInfoContent(goldOreInfo);
        //Register new Tab
        BestiaryUtils.createGroup(goldOreGroup);
    }

    public static init() as void{
        rawGold();
        goldIngot();
    }
}

goldResourcesExample.init();
```