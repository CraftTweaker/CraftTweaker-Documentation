# 方块材料


`方块材料` 使你可以定义方块在游戏中的质地
在Minecraft中,方块材料只有这些:

<details>
	<summary>Click to expand the Material list</summary>
	<ul>
		<li>Air(空气)</li>
		<li>Grass(草方块)</li>
		<li>Ground(泥土)</li>
		<li>Wood(木板)</li>
		<li>Rock(岩石)</li>
		<li>Iron(铁块)</li>
		<li>Anvil(铁砧)</li>
		<li>Water(水)</li>
		<li>Lava(岩浆)</li>
		<li>Leaves(树叶)</li>
		<li>Plants(杂草)</li>
		<li>Vine(藤蔓)</li>
		<li>Sponge(海绵)</li>
		<li>Cloth(皮革)</li>
		<li>Fire(火)</li>
		<li>sand(沙子)</li>
		<li>Circuits(红石)</li>
		<li>Carpet(地毯)</li>
		<li>Glass(玻璃)</li>
		<li>Redstone_Light(红石灯)</li>
		<li>TNT(炸药)</li>
		<li>Coral(珊瑚)</li>
		<li>Ice(冰)</li>
		<li>Packed_Ice(浮冰)</li>
		<li>Crafted_Snow(雪块)</li>
		<li>Cactus(仙人掌)</li>
		<li>Clay(黏土)</li>
		<li>Gourd(金块)</li>
		<li>Dragon_Egg(龙蛋)</li>
		<li>Portal(传送门)</li>
		<li>Cake(蛋糕)</li>
		<li>Web(蜘蛛网)</li>
	</ul>
</details>

在定义方块材料时,方块材料应以尖括号引用的方式调用,如:

```
<blockmaterial:name>

<blockmaterial:wood>
```

如果你引用的方块材料是可用的,这将返回 [自定义材料](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition) 对象
