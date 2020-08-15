# Ricerca Di Blocco

## Caratteristica:

Questa funzione consente di bloccare l'acquisizione di Ricerca dietro un gruppo di requisiti impostati. Ciò significa, ad esempio, che è possibile impostare l'acquisizione di "Golem Research" dietro l'esigenza di essere in una certa dimensione (come si vede nell'esempio qui sotto). Questo significa che devi essere in quella dimensione per acquisire la ricerca, tuttavia una volta che hai la ricerca che hai ottenuto. Non "resetta" né "disimparare" lasciando la dimensione o non soddisfacendo più i requisiti in generale!

## Sintassi:

    mods.compatskills.Thaumcraft.addResearchLock(String researchKey, String... requisiti);
    
    mods.compatskills.Thaumcraft.addResearchLock("GOLEMVISION", "dim<unk> 1");