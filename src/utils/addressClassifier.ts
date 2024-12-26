import { RuinsInfo } from "@/app/ruinsSearch/page";

const addressClassifier = (AddressInfo: RuinsInfo) => {
  const roadAddress =
    AddressInfo.CTPRVN_NM && AddressInfo.SIGNGU_NM && AddressInfo.RDNMADR_NM && AddressInfo.BULD_NO
      ? `${AddressInfo.CTPRVN_NM} ${AddressInfo.SIGNGU_NM} ${AddressInfo.RDNMADR_NM} ${AddressInfo.BULD_NO}`.trim()
      : null;

  const jibunAddress =
    AddressInfo.CTPRVN_NM &&
    AddressInfo.SIGNGU_NM &&
    AddressInfo.LEGALDONG_NM &&
    AddressInfo.LNBR_NO
      ? `${AddressInfo.CTPRVN_NM} ${AddressInfo.SIGNGU_NM} ${AddressInfo.LEGALDONG_NM} ${
          AddressInfo.LI_NM || ""
        } ${AddressInfo.LNBR_NO}`.trim()
      : null;

  return roadAddress ? roadAddress : jibunAddress;
};

export default addressClassifier;
