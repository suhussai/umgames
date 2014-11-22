import re;
#for getting to replace using regular expressions

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
    print(gameTitle);
    return gameTitle;

def getSource():
    gameSource = input("Enter game source: ");
    return gameSource

def getCategory():
    gameCategory = input("Enter game category: ");
    return gameCategory

def getThumbnail():
    gameThumbnail = input("Enter game thumbnail name: ");
    gameThumbnail = "images/" + gameThumbnail;
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

    print("This is the new game information being added: " + newCategoryInfo);
    input("Press Enter to continue: ");

    categoryFile.seek(0);
    categoryFile.truncate();
    categoryFile.write(newCategoryInfo);
    print("Done writing thumbnail in proper category");

def writeTitleAndSource():
    gameFile = open("gameDB.js", "r+");
    gameInfo = gameFile.read();
#    gameInfo = gameInfo.split('//divider');
#    gameInfo = gameInfo.split('\n');
#    print(len(gameInfo));

#    gameSourceInfo = gameInfo[0];
    #print(gameSourceInfo);


    gameTitle = getTitle();
    gameSource = getSource();
#    gameTitleInfo = "//divider\n" + gameInfo[1];
    category = getCategory();
    finder = 'var titleFor' + category + ' = ["", ';
    gameTitleIndex = gameInfo.find(finder);
    titleIndex = gameInfo.find('""', gameTitleIndex + len(finder));
    gameInfo = gameInfo[0:titleIndex + len('""') - 1] + gameTitle + gameInfo[titleIndex + len('""') - 1::]; 

    finder = 'var srcFor' + category + " = ['', ";
    gameSrcIndex = gameInfo.find(finder);
    srcIndex = gameInfo.find("''", gameSrcIndex + len(finder));
    gameInfo = gameInfo[0:srcIndex + len('""') - 1] + gameSource + gameInfo[srcIndex + len('""') - 1::]; 
    gameInfo = re.sub(r'width=\"\d+..\"','width="100%"', gameInfo);
    gameInfo = re.sub(r'height=\"\d+..\"','height="100%"', gameInfo);

#    newGameInfo = gameSourceInfo[0:len(gameSourceInfo)-3] + gameSource + "\n//divider" +  gameTitleInfo[0] + gameTitleInfo[1][1:index+1] + splitter + '"' + gameTitle + gameTitleInfo[1][index+1::];
    
    print("This is the new game information being added: " + gameInfo);
    input("Press Enter to continue: ");
    
    gameFile.seek(0);
    gameFile.truncate();
    gameFile.write(gameInfo);
    

writeTitleAndSource();
writeCategoryAndThumbnail();
