# 绑定支持

## 绑定：

如果玩家不符合要求，这将取消对所述特定物品的绑定。

### 前1.4.0：

#### 语法：

    空白示例：
    mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack, String... 需要);
    
    测试示例:
    mods.compatskills.BindHandler.addBindLock("无法告诉的暗色能量swirl 你周围，然后又是子侧", <bloodmagic:blood_orb>.withTag({orb: "bolmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minec
    

### Post1.4.0

截至Compatskills 1.4.0，绑定锁现已作为物品Stack-Locking的一部分滚动。 这意味着不再有一个用于添加绑定锁的专用脚本语法。

这一变化还伴随着其他一些变化。 例如，显示的默认错误信息在某些方面已被更改：

- 它现在作为仅限玩家状态的消息在聊天室中与要求一起显示
- 错误消息现在是一个本地化字符串： 

    compatskills.blemmagic.bindingError=无法告诉的暗色能量轮到你周围，然后再边边。
    

这意味着资源包作者现在可以将错误信息本地化为他们想要的语言。 这也意味着您可以使用 ResourceLoader 或 Basel (与 ContentTinvate 存在) 来更改错误字符串。