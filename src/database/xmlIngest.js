import http from "http";
import xml2js from "xml2js"
const parser = new xml2js.Parser({ attrkey: "ATTR" });

const xmlUrl = "http://fx-nunchee-assets.s3.amazonaws.com/data/sports.xml";

http.get(xmlUrl, (res) => {
    res.setEncoding("utf8");
    let data = '';
    res.on('data', (stream) => {
        data += stream;
    });
    res.on('end', () => {
        parser.parseString(data, (error, result) => {
            if (error === null) {
                console.log(result);
                console.log(typeof(result))
                console.log(result['plantelEquipo'])
            }
            else {
                console.log(error);
            }
        });
    });
});



