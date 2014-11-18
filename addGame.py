print("Starting");

'''
Process for adding game:
1. Get game title.

2. Get game category.

3. Get game source.

4. Get game thumbnail.

'''


def getTitle():    
    gameTitle = input("Enter game title: ");
    gameTitle = ', "' + gameTitle + '"];';
    return gameTitle;

def getSource():
    gameSource = input("Enter game source: ");
    gameSource = ", '" + gameSource + "'];";
    return gameSource

def getCategory():
    gameCategory = input("Enter game category: ");
    return gameCategory

def getThumbnail():
    gameThumbnail = input("Enter game thumbnail name: ");
    return gameThumbnail
    
def writeCategoryAndThumbnail():
    categoryFile = open("categories.js", "r+");
    categoryInfo = categoryFile.read();
    category = getCategory();
    thumbnail = getThumbnail();
    splitter = 'var for' + category + ' = ["", ';
    categoryInfo = categoryInfo.split(splitter);
    index = categoryInfo[1].find('""');
    #there exists a chance where you might write more images than there is space
    #beware
    newCategoryInfo = categoryInfo[0] + splitter +  categoryInfo[1][0:index+1] + thumbnail + categoryInfo[1][index+1::];
    categoryFile.seek(0);
    categoryFile.truncate();
    categoryFile.write(newCategoryInfo);
    print("Done writing thumbnail in proper category");

def writeTitleAndSource():
    gameFile = open("gameDB.js", "r+");
    gameInfo = gameFile.read();
    gameInfo = gameInfo.split('\n');
    
    gameTitleInfo = gameInfo[0];
    #print(gameTitleInfo);
    
    gameSourceInfo = gameInfo[1];
    #print(gameSourceInfo);
    

    gameTitle = getTitle(); 
    gameSource = getSource();
    
    newGameInfo = gameTitleInfo[0:len(gameTitleInfo)-2] + gameTitle + "\n" + gameSourceInfo[0:len(gameSourceInfo)-2] + gameSource;
    gameFile.seek(0);
    gameFile.truncate();
    gameFile.write(newGameInfo);
    

writeTitleAndSource();
writeCategoryAndThumbnail();
