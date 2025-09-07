package com.mygdxgame.utils;

import com.badlogic.gdx.assets.AssetManager;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.BitmapFont;

public class AssetManager {
    private AssetManager manager;
    
    public AssetManager() {
        manager = new AssetManager();
    }
    
    public void loadAssets() {
        // Load textures
        manager.load("images/player.png", Texture.class);
        manager.load("images/player2.png", Texture.class);
        manager.load("images/dice.png", Texture.class);
        manager.load("images/board.png", Texture.class);
        manager.load("images/ui/button.png", Texture.class);
        manager.load("images/ui/background.png", Texture.class);
        
        // Load fonts
        manager.load("fonts/default.fnt", BitmapFont.class);
        
        manager.finishLoading();
    }
    
    public Texture getTexture(String path) {
        return manager.get(path, Texture.class);
    }
    
    public BitmapFont getFont(String path) {
        return manager.get(path, BitmapFont.class);
    }
    
    public void dispose() {
        manager.dispose();
    }
    }
