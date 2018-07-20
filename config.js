var config = {};

config.apiKey = "";

config.queryKey = "";

config.serviceURL = "https://[searchName].search.windows.net";

config.dataSourceName = "[dataSourceName]";

config.indexerName = "[indexerName]";

config.indexName = "[indexName]";

config.apiVersion = "2015-02-28-Preview";

config.connectionString = "[blobStorageConnectionString]";

config.tableName = "blobStorageTableName";

config.dataSourceType = "azureblob"; 

config.useJsonParser = true;

config.maxFailedItems = 10;

config.maxFailedItemsPerBatch = 5;

config.base64EncodeKeys = false;

module.exports = config;