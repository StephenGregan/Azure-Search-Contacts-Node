var config = {};

config.apiKey = "{SearchApiKey}";

config.queryKey = "{SearchQueryKey}";

config.serviceURL = "https://{SearchServiceName}.search.windows.net";

config.dataSourceName = "{DataSourceName}";

config.indexerName = "{IndexerName}";

config.indexName = "{IndexName}";

config.apiVersion = "2015-02-28-Preview";

config.connectionString = "{BlobStorageConnectionString}";

config.tableName = "{BlobtableName}";

config.dataSourceType = "{DataSourceType}"; // azureBlob, azureSql... 

config.useJsonParser = true;

config.parsingMode = "jsonArray";

config.maxFailedItems = 10;

config.maxFailedItemsPerBatch = 5;

config.base64EncodeKeys = false;

module.exports = config;