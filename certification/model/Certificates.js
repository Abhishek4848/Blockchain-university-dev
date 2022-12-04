const { mongoose } = require("./mongoose");
const truffle_connect = require("../utils/connection");

truffle_connect.connectWeb3();

const CertificateSchema = new mongoose.Schema({
  candidateName: {
    type: String,
    required: true,
    trim: true
  },
  orgName: {
    type: String,
    required: true,
    trim: true
  },
  courseName: {
    type: String,
    required: true,
    trim: true
  },
  expirationDate: {
    type: Number,
    required: true,
    trim: true
  },
  assignDate: {
    type: Number,
    required: true,
    trim: true
  },
  duration: {
    type: Number,
    required: true,
    trim: true
  },
  certificateId: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    trim: true
  },
  ssn: {
    type: String,
    required: true,
    trim: true
  }
});

CertificateSchema.methods.toJSON = function() {
  const data = this;
  const obj = data.toObject();

  return {
    ...obj,
    //certificateId: obj._id.toString(),
    _id: undefined,
    __v: undefined
  };
};

CertificateSchema.methods.verifyData = function() {
  const data = this;
  const certificateId = data.certificateId;
  return truffle_connect
    .getCertificateData(certificateId)
    .then(blockData => {
      const responseObject = {
        candidateName: blockData[0],
        orgName: blockData[1],
        courseName: blockData[2],
        ssn: blockData[3],
        expirationDate: parseInt(blockData[4])
      };
      const databaseObject = {
        candidateName: data.candidateName,
        orgName: data.orgName,
        courseName: data.courseName,
        ssn: data.ssn,
        expirationDate: data.expirationDate
      };
      console.log("#########\n\
      Blockchain: %s %s %s %d\n\
      web: %s %s %s %d\n", responseObject.candidateName, responseObject.orgName, responseObject.courseName, responseObject.ssn,
      responseObject.expirationDate, databaseObject.candidateName, databaseObject.orgName, databaseObject.courseName, databaseObject.ssn, databaseObject.expirationDate);
      if (JSON.stringify(responseObject) === JSON.stringify(databaseObject))
        return true;
      else throw false;
    })
    .catch(err => {
      console.log("erroradfads %s\n", err);
      return false;
    });
};

CertificateSchema.methods.appendBlockchain = function() {
  const data = this;

  const { candidateName, orgName, courseName, expirationDate, ssn, certificateId } = data;

  return truffle_connect.generateCertificate(
    certificateId,
    candidateName,
    orgName,
    courseName,
    ssn,
    expirationDate
  );
};

const Certificates = mongoose.model("certificates", CertificateSchema);

module.exports = Certificates;
