import { Mina, PublicKey } from "o1js";
export { testKeys, tokenContractKey, adminContractKey, wallet };

const testKeysInternal = [
  {
    privateKey: "EKE9AXJtqc6FyXq2Nr2nATXoeJBBrAKK6DZr2vRPCrnNK9ss3kGT",
    publicKey: "B62qmKggMTU6TyrEXdCGEakBbsc3EBeypXTWQmpqRA3y88xepXeQm3a",
  },
  {
    privateKey: "EKFQmZpb73nZaPG7fVqTqev39HwftKRzvrzgXTpezDgbapm4d4YZ",
    publicKey: "B62qmWwo7jjmUp6yEWw1e1zYV5D2mGX6auumiqfn3ZkkoJbTgvwifKs",
  },
  {
    privateKey: "EKEjyNyZ6V32PbHurNbvXDYD5wjweXT3vQSi7ZaMvA7x2mwraYhm",
    publicKey: "B62qrnnYQfFt9tPRp44fsWHds8LF7ojJKhknYZKNYU3X4xVCdSnnRJc",
  },
  {
    privateKey: "EKEaLmdeAehSQ9ttQ1fooA4W1F4AhBeoMJNpkSwz8PcWwf9TWVcf",
    publicKey: "B62qrHNkJRLkrwn4GqWLNkGR1JSBqXFhaDaYex7L5GRQDAS8KLr5YZw",
  },
  {
    privateKey: "EKE5sh1GtKVVap6WHcdMvUSbE6vN9cmJJznsLAg8N2xYa9sVTUWX",
    publicKey: "B62qry8GAz6PnsdNbepLGXvWyGnDETW8i84WeeA5t3wNdy1VceBpZ5n",
  },
  {
    privateKey: "EKEEzQH9jbsm2Vq1cGaUCGXdLrpZuZxmvyYAQ7Hv1pDH5o3aduiV",
    publicKey: "B62qrMQHfQw88LaxuXJFCktmtYxQXtnDpXQSgzY1B9A8Ss6sajWiBbf",
  },
  {
    privateKey: "EKF9Bz275vhwXYZZuVaa9zpyrHcGrQ9aN3NohAWbn3pSN6gACiyo",
    publicKey: "B62qoZHdjWYMi9fcpPHne3zCV8cqC3dn279pxArfk53GeooKJL2rLTS",
  },
  {
    privateKey: "EKEKt8fCe4uf89cP9VZ7s1fPRHSGr13vz36vwDFUDuhehVESa5R7",
    publicKey: "B62qnNreJT2oqR9LivxcdmdRL2Kwf8ZssySbykjQEX8HGgRM3uQTgdA",
  },
  {
    privateKey: "EKDucL2gaZzwvrUmVbSFNbY1k7Pp59CzH2JbVgkBy9ta7Hdh1mLV",
    publicKey: "B62qmAbjHKuc7vkt8mdpMfbGukyVntEZ2r4PU51TL8aGrRtLjgUc7rV",
  },
  {
    privateKey: "EKFSH29RHhBfhYrFgZj7deud9qUDvk46GYRCTWu7DSqdbgTMmd3k",
    publicKey: "B62qob86EcS3BDr3coUXZNQxMgUGYwqBvotqBuf7F5bLAQjXEJhZNuS",
  },
];

const contractKeys = [
  {
    privateKey: "EKFUSR32xmaMfr6YNkd6d4nAGAr9dhwNmjzfcSjABMQqemJswYR2",
    publicKey: "B62qj2YbEjkPr4WhGdTKSMZ2WQik6kty5FZ8vqfKUKv32GQxBjRRSWh",
  },
  {
    privateKey: "EKEPCn7iuemAJKH6F59EMmEatY1Ya6wZMJqL1Npi5F9kskKyVAj8",
    publicKey: "B62qjMFSmQTknm3dbkFSFK1CooiHowASg9nU6hHXHfBFQ64snRTRCTe",
  },
  {
    privateKey: "EKEv4ei7N4exq16ASyVfjyFjVaimf2QYwEaocscymimfKL2WYHyq",
    publicKey: "B62qqQ6pvPRuoJTADeBSaDpp3mkARvpjGEMKdk6bybS8z3Zm5SNNaJu",
  },
  {
    privateKey: "EKEjTKxWAq3pQGUtNdHRCxMxM6EpJHUMp7TyVkf2TSKt7DEpf581",
    publicKey: "B62qkaLRAJPXiVkruYGbDAQKT5f5uqNCdFQTAPQGQWqw1bWfUGoq2JY",
  },
  {
    privateKey: "EKEhUZEeqyHcAZPdstCNzu2X2dcXr5RZBrEipWrjAGxkN5HVwZLu",
    publicKey: "B62qj56QAsgPCNgZX5KSpRchjKQPTK4mMKNyBFa1UBTuaNY988BRTCy",
  },
  {
    privateKey: "EKEzDXsNuS542sVAGGGvP9ymaVVWgHDSC9kaVFcGtqK9erKkJ37M",
    publicKey: "B62qp9QdTkaK2PXykrwq56oXUVm2oNfc4pAHUnQ1oNYbeS1KWNP8a4G",
  },
  {
    privateKey: "EKFQm5nT2gcZyKxKCSPbGMAX5dZ2BV93N4j8f2bDaTQqnveWSn7A",
    publicKey: "B62qomGASuFoXpKaaLny4FuEie7h8XGVxiHbQdEaKakY6iKJPV2yYou",
  },
  {
    privateKey: "EKDyDoWdv3Abvo49n4B1bDc4z5Ks94auqzZV4vivdKkZEMbXoWh1",
    publicKey: "B62qnZ1NS84DQ3qMeKi98A9P7H7GcnSYVtkRtnVwPQAMMs9MmZ1W8iC",
  },
  {
    privateKey: "EKE7qF42zC6utsmiiwWDTSTz3Qh4omgCAcaVCqTwYoWFd6yVhgSw",
    publicKey: "B62qoyFwuaBGzJSDCHtPxfVZvPLX61Pto54Kf8Hx25VEGKY3qThFmUT",
  },
  {
    privateKey: "EKFAGRHxJP39E9VKRbeoqq3GcNkV5Zum7VinGgr1Ax9cd6KioAym",
    publicKey: "B62qr4b9mVU2Lsxr5WdJdUQTjfh9X3fUX1Z5Di7RbwsiDLyhrcGKE4w",
  },
];

const testKeys: Mina.TestPublicKey[] = testKeysInternal.map((key) =>
  Mina.TestPublicKey.fromBase58(key.privateKey)
);

const [tokenContractKey, adminContractKey]: Mina.TestPublicKey[] =
  contractKeys.map((key) => Mina.TestPublicKey.fromBase58(key.privateKey));

const wallet = PublicKey.fromBase58(
  "B62qqhvKVk2KEia7awrhNM1nPLUEXDM8WiPut7xXKrNDYDae1JU5GzN"
);
