export const devToolsWarning =() =>{
    document.addEventListener('DOMContentLoaded', () => {
        if (window.console || 'console' in window) {
          // tslint:disable-next-line:no-console
          console.log(`
           _______     __                __               _______   __                     
          /       \\   /  |              /  |             /       \\ /  |                    
          $$$$$$$  | _$$ |_    __    __ $$/_______       $$$$$$$  |$$ |  ______    ______  
          $$ |__$$ |/ $$   |  /  |  /  |$//       |      $$ |__$$ |$$ | /      \\  /      \\ 
          $$    $$/ $$$$$$/   $$ |  $$ | /$$$$$$$/       $$    $$< $$ |/$$$$$$  |/$$$$$$  |
          $$$$$$$/    $$ | __ $$ |  $$ | $$      \\       $$$$$$$  |$$ |$$ |  $$ |$$ |  $$ |
          $$ |        $$ |/  |$$ \\__$$ |  $$$$$$  |      $$ |__$$ |$$ |$$ \\__$$ |$$ \\__$$ |
          $$ |        $$  $$/ $$    $$ | /     $$/       $$    $$/ $$ |$$    $$/ $$    $$ |
          $$/          $$$$/   $$$$$$$ | $$$$$$$/        $$$$$$$/  $$/  $$$$$$/   $$$$$$$ |
                              /  \\__$$ |                                         /  \\__$$ |
                              $$    $$/                                          $$    $$/ 
                               $$$$$$/                                            $$$$$$/  
        `);
        }
      });
}