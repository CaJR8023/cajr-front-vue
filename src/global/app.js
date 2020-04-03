import OSS from "ali-oss";

const ossClient = new OSS({
  region: "<Your region>",
  accessKeyId: "<Your AccessKeyId>",
  accessKeySecret: "<Your AccessKeySecret>"
});

export default ossClient;
