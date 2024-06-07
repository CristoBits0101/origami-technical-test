document.addEventListener('DOMContentLoaded', () => {
    const stage = new Konva.Stage({
        container: 'container',
        width: 595,
        height: 842
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    document.getElementById('addText').addEventListener('click', () => {
        const textNode = new Konva.Text({
            text: 'Sample Text',
            x: 50,
            y: 80,
            draggable: true,
            fontSize: 20,
            fontFamily: 'Calibri',
            fill: 'black',
            fontStyle: 'normal'
        });

        textNode.on('dblclick', () => {
            textNode.fontStyle(textNode.fontStyle() === 'bold' ? 'normal' : 'bold');
            layer.draw();
        });

        layer.add(textNode);
        layer.draw();
    });

    document.getElementById('downloadPDF').addEventListener('click', () => {
        const dataURL = stage.toDataURL();
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'page.pdf';
        link.click();
    });

    document.getElementById('downloadJSON').addEventListener('click', () => {
        const json = stage.toJSON();
        const link = document.createElement('a');
        link.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(json);
        link.download = 'page.json';
        link.click();
    });
});
