const puppeteer = require('puppeteer');

(async () => {
    try {
        const navegador = await puppeteer.launch()
        const pagina = await navegador.newPage()
        const url = 'http://www.marca.com/futbol/primera-division/clasificacion.html'
        const urlArticles = 'http://www.marca.com/'
        //await pagina.goto(url)
        
        // const html = await pagina.content()
        // console.log(html)

        // let tabla = await pagina.evaluate(() => {
        //     const equipos = [
        //         ...document.querySelectorAll('.equipo')
        //     ].map((equipo) => equipo.innerText)

        //     const puntos = [
        //         ...document.querySelectorAll('.total_puntos.pt')
        //     ].map((puntos) => puntos.innerText)
        //     return equipos.map((equipo, i) => ({
        //         equipo: equipo,
        //         puntos: puntos[i]
        //     }))
        // })
        //console.log(tabla)

        await pagina.goto(urlArticles)
        
        const articulos = await pagina.evaluate(() => {
            return [
                ...document.querySelectorAll('.mod-futbol')
            ]
        })
        articulos.map((articulo)=>{
            console.log(articulo)
        })

        await navegador.close()
        
    } catch (e) {

    }
})()