# BracketHandler

A bracket handler is used to resolve [ZenTokens](/Dev_Area/ZenTokens) inside `<tokens>`.  
In order to do that, ZS will add all tokens inside the brackets to a list and go through all registered bracket handlers to find one that does not return `null`.  
The annotated class simply need to implement [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).

## Example:

[CraftTweaker Test Project Bracket Handler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/BracketWiki.java)
```
@BracketHandler(priority = 34)
@ZenRegister
public class BracketWiki implements IBracketHandler{
	
	@Override
	public IZenSymbol resolve(IEnvironmentGlobal environment, List<Token> tokens) {
		if ((tokens.size() < 3)) return null; 
		if (!tokens.get(0).getValue().equalsIgnoreCase("devBracket")) return null;
		if (!tokens.get(1).getValue().equals(":")) return null;
		
		return new devSymbol(tokens);
	}
	
	
	private class devSymbol implements IZenSymbol {

		private final String value;
		public devSymbol(List<Token> tokens) {
			StringBuilder sB = new StringBuilder();
			tokens.stream().map(Token::getValue).forEach(sB::append);
			this.value = sB.toString().replaceAll(":", " ");
		}

		@Override
		public IPartialExpression instance(ZenPosition position) {
			return new ExpressionString(position, "DevSymbol: ".concat(value));
		}
		
	}
	
}
```


## What classes can be annotated || Additional Info

- You can annotate all Java Classes that are an instance of [IBracketHandler](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/IBracketHandler.java).
- You can give the annotation a priority value (e.g. `priority = 100`). The higher the prio the earlier that specific bracket handler is checked: CrT Bracket Handlers normally have a priority of 100.
- After declaring a class a ZenBracketHandler, you still need to register it. It is recommended that you use [`@ZenRegister`](Annotation_ZenRegister) for that.
- If your bracket Handler cannot resolve the brackets or is not meant to resolve the bracket, you should return `null`