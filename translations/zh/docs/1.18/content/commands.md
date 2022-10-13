# 命令

重要的指令：

```plaintext
/ct hand
#查看自己手上所拿着物品的id及其nbt标签(如果有的话)
```

Prints information about the item you're holding to your chat. This is crucial to get Items, Tags and Block bracket handlers.

![Image](https://i.blamejared.com/JNpRk.png)

The result of using `/ct hand` on the Sand item.

```plaintext
/reload
```

Reloads the game, the same thing as relogging into a world. Reloads datapacks and after those, scripts. Useful to not restart the game to test your features. Errors in your scripts will be shown here and in your `crafttweaker.log` file.

![Image3](https://blamejared.com/docsImages/commands/reloading.png)

```plaintext
/ct log
#查看mod所生成的日志
```

Gives you a clickable link to where your `crafttweaker.log` file is located, which is a crucial file in script writing and debugging. Will only work in singleplayer as it opens the folder the scripts are found in, and that cannot be done in the remote server.

![Image2](https://blamejared.com/docsImages/commands/log.png)

```plaintext
/ct scripts
#打开游戏目录下的scripts文件夹
```

Gives you a clickable link to where your `scripts` directory is within your Instance. Just like `/ct log`, it will only work on a singleplayer world.

![img.png](https://blamejared.com/docsImages/commands/scripts.png)

```plaintext
/ct issues
#打开github链接向开发者提供问题反馈
```

Gives you a clickable link that opens the Github Issue Tracker for the CraftTweaker mod through your Browser. Bug reports should be done through the github tracker, although extensive discussion of them should be done through the discord.


![img_1.png](https://blamejared.com/docsImages/commands/issues.png)

```plaintext
/ct discord
#打开CT的官方discord频道
```

Gives you a clickable link that opens the CraftTweaker discord through your Browser. You can ask for help here!


![img_2.png](https://blamejared.com/docsImages/commands/discord.png)

```plaintext
/ct dump
#在log文件中导出所需的所有信息
```

The `dump` command is a command that can be used to dump all possible bracket types of the selected kind to the `crafttweaker.log`.

![img_3.png](https://blamejared.com/docsImages/commands/dump.png)

```plaintext
/ct dump recipeTypes
```

The `dump recipeTypes` command is the execution of the `dump` command with the `recipeTypes` argument. It will print the list of registered recipetypes. These are crucial to add a recipe to a recipetype that doesn't have default support, through a JSON Recipe, just like a datapack. More information about this can be found [here](/mods/other_mods).

```plaintext
/ct dump_brackets
```

The `dump_brackets` command executes the `dump` command for every possible argument. This dump, however, will be placed in a folder called `ct_dumps` in your `.minecraft` folder.

```plaintext
/ct help
#显示帮助信息
```

Displays the extended, full list of commands CraftTweaker registers. Consists of 6 pages.

```plaintext
/ct recipes
```

If no arguments are given, this command generates the full recipe list to the `crafttweaker.log` file. If the `hand` argument is provided, it will generate all recipes for the held item. The recipes are given to you in their script form.

![img_4.png](https://blamejared.com/docsImages/commands/dump_recipes.png)

```plaintext
/ct examples
```

Generates an `examples` folder under your `scripts` directory. These include example files for the version of CraftTweaker you are using, which run out of the box and showcase the various modifications you can apply through the use of CraftTweaker. It is recommended to move them out of the `scripts` folder to see them without having them execute.

![img_5.png](https://blamejared.com/docsImages/commands/examples.png)


