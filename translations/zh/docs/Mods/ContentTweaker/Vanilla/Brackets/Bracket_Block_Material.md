# 块材质板块处理器

方块材料板块处理程序允许您在游戏中访问方块材料。 当前唯一支持的方块材料有：

<details>
    <summary>点击以展开材料列表</summary>
    <ul>
        <li>Air</li>
        <li>草地</li>
        <li>地线</li>
        <li>木头</li>
        <li>摇动</li>
        <li>铁色</li>
        <li>铁道体</li>
        <li>水</li>
        <li>Lava</li>
        <li>叶子</li>
        <li>Plants</li>
        <li>Vine</li>
        <li>Sponge</li>
        <li>布色</li>
        <li>火力</li>
        <li>沙子</li>
        <li>电路</li>
        <li>地毯座</li>
        <li>玻璃板</li>
        <li>红石光</li>
        <li>TNT</li>
        <li>珊瑚状体</li>
        <li>冰箱</li>
        <li>封装冰箱</li>
        <li>雪花</li>
        <li>Cactus</li>
        <li>粘土</li>
        <li>Gourd</li>
        <li>龙蛋</li>
        <li>门户网站</li>
        <li>蛋糕！</li>
        <li>Web</li>
    </ul>
</details>

块材料在这种材料夹处理器中被引用：

```zenscript
<blockmaterial:name>

<blockmaterial:wood>
```

如果找到方块材料，这将返回一个 [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) 对象。