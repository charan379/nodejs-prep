import fs from "fs";
import xlsx from "xlsx";

async function getData(filePath) {
    return fs.promises.readFile(filePath, { encoding: "utf8" });
};

async function main() {

    const data = await getData("data.json");

    const response1 = JSON.parse(data).responses[0];

    const response2 = JSON.parse(data).responses[1];

    const subnets = response1.content.properties.subnets;

    const subnetAddDetails = response2.content.value;


    const subnetDetails = subnets.map(snet => {
        let snetDetail = parseSubnet(snet);
        const additionalSnetDetails = subnetAddDetails.find(sad => sad.id === snetDetail.id);

        if (additionalSnetDetails) {
            delete snetDetail.id
            return { ...snetDetail, limit: additionalSnetDetails?.limit, used: additionalSnetDetails?.currentValue, available: additionalSnetDetails?.limit - additionalSnetDetails?.currentValue }
        }
    });

    addSnetDetailsToWorkbook(subnetDetails, "Test Subnet 2");
}

function addSnetDetailsToWorkbook(subnetDetails, sheetName) {

    const workbook = xlsx.readFile("details.xlsx");

    const worksheet = xlsx.utils.json_to_sheet(subnetDetails);

    xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);

    xlsx.writeFile(workbook, "details.xlsx")
};

function parseSubnet(snet) {

    const id = snet?.id;
    const name = snet?.name ?? "NA";
    const addressPrefix = snet?.properties?.addressPrefix ?? "NA";
    const totalNics = snet?.properties?.ipConfigurations?.length ?? 0;
    const inUse = totalNics > 0 ? true : false;

    return { id, name, addressPrefix, totalNics, inUse };

}

await main();
