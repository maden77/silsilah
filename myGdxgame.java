package com.mygdxgame;

import com.badlogic.gdx.Game;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.mygdxgame.screens.MenuScreen;
import com.mygdxgame.utils.AssetManager;

public class MyGdxGame extends Game {
    public SpriteBatch batch;
    public AssetManager assetManager;
    
    @Override
    public void create() {
        batch = new SpriteBatch();
        assetManager = new AssetManager();
        assetManager.loadAssets();
        
        this.setScreen(new MenuScreen(this));
    }
    
    @Override
    public void render() {
        super.render();
    }
    
    @Override
    public void dispose() {
        batch.dispose();
        assetManager.dispose();
    }
}
