import React, { useEffect } from 'react';

export function Menu() {
  useEffect(() => {
    try {
      fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
        return true;
      }).catch(function(e) {
        var carbonScript = document.createElement("script");
        carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CE7DC2JW&placement=wwwcssscriptcom";
        carbonScript.id = "_carbonads_js";
        document.getElementById("carbon-block").appendChild(carbonScript);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="div1"><div></div></div>
      <div className="menu">
        <div>
          <ul>
            <li><a href="./home.html"><i className="fa-solid fa-house"></i></a></li>
            <li><a href="./profile.html"><i className="fa-regular fa-user fa-sm"></i></a></li>
            <li><a href="./product.html"><i className="fa-solid fa-box fa-sm"></i></a></li>
            <li><a href="./environment.html"><i className="fa-sharp fa-solid fa-shop fa-sm"></i></a></li>
            <li><a href="./index.html"><i className="fa-solid fa-right-from-bracket"></i></a></li>
          </ul>
        </div>
      </div>
      
    </div>
    
  );
}

export default Menu;
