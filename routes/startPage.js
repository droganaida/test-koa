
const config = require('../config');

async function get (ctx) {

    let options = {
        title: "Работа с большими графическими файлами. Уменьшение jpg/png. ImageMagick vs GraphicsMagick vs Sharp. #BlondieCode",
        libraries: config.libraries,
        test: ctx.state.test
    };

    return ctx.render('main', { options: options });
    //ctx.throw (504, 'Test error');
    //throw new Error('Error here');
}

module.exports.get = get;