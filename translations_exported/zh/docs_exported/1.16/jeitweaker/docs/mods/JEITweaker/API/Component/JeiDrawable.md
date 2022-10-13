::since{version=1.1.0}
# JeiDrawable

Represents anything that can be drawn in a JEI recipe or category.

 A drawable can be anything from an ingredient, to a blank image, to something with animations. Refer to all the available factory methods for more information.

 All [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient)s can automatically convert into a [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable), avoiding some boilerplate. Refer to com.blamejared.jeitweaker.zen.component.JeiIngredientExpansions#asJeiDrawable(RawJeiIngredient) and its specialized versions com.blamejared.jeitweaker.zen.component.IItemStackExpansions#asJeiDrawable(IItemStack) and com.blamejared.jeitweaker.zen.component.IFluidStackExpansions#asJeiDrawable(IFluidStack) for more information.

This class was added by a mod with mod-id `jeitweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.jei.component.JeiDrawable;
```


## Static Methods

:::group{name=blank since="1.1.0"}

Creates a blank drawable of the given width and height. <br />  <br />  A blank drawable draws nothing.

Returns: A blank [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable).  
Return Type: [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)

```zenscript
JeiDrawable.blank(width as int, height as int) as JeiDrawable
```

| 参数           | 类型  | 描述                          |
| ------------ | --- | --------------------------- |
| width #宽度    | int | The width of the drawable.  |
| height #实体高度 | int | The height of the drawable. |


:::

:::group{name=of since="1.1.0"}

Creates a drawable that draws the given [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient).

Returns: An ingredient [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable).  
Return Type: [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)

```zenscript
JeiDrawable.of(ingredient as JeiIngredient) as JeiDrawable
```

| 参数         | 类型                                                            | 描述                      |
| ---------- | ------------------------------------------------------------- | ----------------------- |
| ingredient | [JeiIngredient](/mods/JEITweaker/API/Component/JeiIngredient) | The ingredient to draw. |


:::

:::group{name=of since="1.1.0"}

Creates a drawable that draws the given texture, as specified in the parameters.

Returns: A texture [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable).  
Return Type: [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)

```zenscript
JeiDrawable.of(texture as MCResourceLocation, u as int, v as int, width as int, height as int) as JeiDrawable
```

| 参数           | 类型                                                         | 描述                                                                                                        |
| ------------ | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| texture      | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | A [MCResourceLocation](/vanilla/api/util/MCResourceLocation) identifying the path of the texture to draw. |
| u            | int                                                        | The u coordinate of the texture (i.e. the top-left x coordinate of the rectangle to draw).                |
| v            | int                                                        | The v coordinate of the texture (i.e. the top-left y coordinate of the rectangle to draw).                |
| width #宽度    | int                                                        | The width of the texture to draw.                                                                         |
| height #实体高度 | int                                                        | The height of the texture to draw.                                                                        |


:::

:::group{name=ofAnimated since="1.1.0"}

Creates an animated version of the given drawable that animates over the course of a set of ticks. <br />  <br />  The original drawable is left untouched, meaning that the returned instance is a fully separate drawable.

Returns: An animated [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable).  
Return Type: [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)

```zenscript
JeiDrawable.ofAnimated(delegate as JeiDrawable, ticks as int, animation as JeiDrawableAnimation) as JeiDrawable
```

| 参数        | 类型                                                                          | 描述                                                                          |
| --------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| delegate  | [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)                   | The drawable that should be animated.                                       |
| ticks     | int                                                                         | The amount of ticks over which the animation unfolds. 20 ticks is 1 second. |
| animation | [JeiDrawableAnimation](/mods/JEITweaker/API/Component/JeiDrawableAnimation) | The type of animation that should be rendered.                              |


:::

:::group{name=ofAnimated since="1.1.0"}

Creates an animated version of a texture drawable. <br />  <br />  Using this method is effectively equivalent to <br />  `ofAnimated(of(texture, u, v, width, height), ticks, animation)`. It is thus merely provided as a <br />  convenience to avoid having to create two drawables.

Returns: An animated texture [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable).  
Return Type: [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)

```zenscript
JeiDrawable.ofAnimated(texture as MCResourceLocation, u as int, v as int, width as int, height as int, ticks as int, animation as JeiDrawableAnimation) as JeiDrawable
```

| 参数           | 类型                                                                          | 描述                                                                                                        |
| ------------ | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| texture      | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)                  | A [MCResourceLocation](/vanilla/api/util/MCResourceLocation) identifying the path of the texture to draw. |
| u            | int                                                                         | The u coordinate of the texture (i.e. the top-left x coordinate of the rectangle to draw).                |
| v            | int                                                                         | The v coordinate of the texture (i.e. the top-left y coordinate of the rectangle to draw).                |
| width #宽度    | int                                                                         | The width of the texture to draw.                                                                         |
| height #实体高度 | int                                                                         | The height of the texture to draw.                                                                        |
| ticks        | int                                                                         | The amount of ticks over which the animation unfolds. 20 ticks is 1 second.                               |
| animation    | [JeiDrawableAnimation](/mods/JEITweaker/API/Component/JeiDrawableAnimation) | The type of animation that should be rendered.                                                            |


:::

:::group{name=ofNinePatch since="1.1.0"}

Creates a new texture drawable which is based on a nine-patch texture.

Returns: A nine-patch texture [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable).  
Return Type: [JeiDrawable](/mods/JEITweaker/API/Component/JeiDrawable)

```zenscript
JeiDrawable.ofNinePatch(texture as MCResourceLocation, u as int, v as int, width as int, height as int, expectedWidth as int, expectedHeight as int) as JeiDrawable
```

| 参数             | 类型                                                         | 描述                                                                                                        |
| -------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| texture        | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | A [MCResourceLocation](/vanilla/api/util/MCResourceLocation) identifying the path of the texture to draw. |
| u              | int                                                        | The u coordinate of the texture (i.e. the top-left x coordinate of the rectangle to draw).                |
| v              | int                                                        | The v coordinate of the texture (i.e. the top-left y coordinate of the rectangle to draw).                |
| width #宽度      | int                                                        | The width of the texture to draw.                                                                         |
| height #实体高度   | int                                                        | The height of the texture to draw.                                                                        |
| expectedWidth  | int                                                        | The width of the drawable.                                                                                |
| expectedHeight | int                                                        | The height of the drawable.                                                                               |


:::

