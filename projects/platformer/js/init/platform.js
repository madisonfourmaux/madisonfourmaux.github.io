(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        platform.create(0, game.world.height - 32, 4.75, 2);

        // example:
        platform.create(800, 700, 1, 0.50); //one
        platform.create(450, 650, 0.75, 0.50); //two
        platform.create(150, 550, 0.85, 0.50); //three
        platform.create(550, 475, 0.25, 0.50); //small one
        platform.create(175, 400, 0.75, 0.50); //four
        platform.create(810, 425, 0.25, 0.50); //small two
        platform.create(550, 325, 0.25, 0.50); //small three
        platform.create(1070, 375, 0.25, 0.50); //small four
        platform.create(810, 250, 0.25, 0.50); //small five
        platform.create(860, 200, 0.90, 1); //finish
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);