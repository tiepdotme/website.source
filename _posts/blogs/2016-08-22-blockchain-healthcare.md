---
layout: blog
title: Blockchain for healthcare industry
date: 2016-08-22 05:10:00 +0530
tag: ["Blockchain", "Healthcare", "Use Case", "Whitepaper"]
permalink: /blogs/blockchain-for-healthcare-usecase
meta: blockchain-for-healthcare-usecase.png
author: pramod
subtitle: Healthcare data is held in a centralized, privately-controlled  location.
---

The healthcare providers in the entire world offers high-end technologies for analyzing and determining a particular disease. But there are certain key problems which are need to be rectified in the healthcare industry.

## 1. Poor data standardization:

In today's healthcare industry, healthcare data is held in some type of centralized location. It may be an EHR system, a data warehouse, a physical file,or a repository run by a health information exchange. Each of this system may have been independently working and stores information it its own particular format. This makes interoperability difficult. Also this will frustrate the patients and providers if they needs to exchange data with some other institution.


## 2. Compromising quality of data:

Quality and accuracy of data is a key concern in healthcare industry. There are various reasons for this:
- mistakes from physician or clinician
- improper updation of EHR (Electronic Health Record) due to simultaneous editing.
- different providers holds different versions of same patients record

![quality of data](/assets/img/blog/blockchain-for-healthcare-patient_trust.png){: .ui .image .fluid}

## 3. Security flaws:

Flaws in privacy and security is a major issue in healthcare industry. Due to the intensely private and secure nature of healthcare data, these are kept in locations where access is theoretically restricted to certain trusted parties. But if somebody gains access, the security of data fails there.

Blockchain helps to rectify the above mentioned flaws in healthcare industry.

Let us discuss what blockchain is:

> Blockchain is a data structure which can be used to create a digital
> ledger of transactions and share the data amount a distributed network of computers. each participant uses a cryptography to manipulate the ledger in a secure way. We cannot change or remove a block of data once it is recorded on the blockchain ledger. Read [what is blockchain]({% post_url 2016-08-12-what-private-permissioned-blockchain %})

## Application of Blockchain in healthcare industry

The blockchain’s potential benefit to the healthcare sector is largely tied to its multi-signature features. Blockchain technology which can be implemented in healthcare sector as explained below:

**Patient:** The very first step is to provide the patient a code (private key or hash) and an address that provides the codes to unlock their patient data. The blockchain provide authentication using multi-signatures also referred to as multi-sigs. The data can be accessed only after successful authentication.

**Provider:** Healthcare providers will have a separate universal signature for accessing data. They need to use the signature with the patient's mult-signature for unlocking and accessing the patient's data.

**Profile:** The himself can define the rules for accessing the records

**Access:** After successful authentication the data can be accessed.

Let us explain how this approach will secure the medical records stored today:

Let us consider a blockchain in healthcare sector for sharing information. For blockchain is decentralised there will not be a controlling person in the chain. In a blockchain network every user will have a copy of the shared data and are responsible for ensuring data integrity and security. ![Blockchain Network Healthcare](/assets/img/blog/blockchain-for-healthcare.png){: .ui .image .fluid}

Blockchain has, M-of-N multisignature method. Which means M of N signatures are required to unlock a specific data. For example, consider a chain of 5 members. If the patient set a rule of 4-of-5 multi-signature method for accessing and modifying data, 4 persons approval is needed for accessing data and for approving the changes in data.So if anybody wants to access the patient's information, he needs permission from others to do so. Whatever changes he makes, must be approved by all the others inside the chain.

These procedure will help the healthcare industry to avoid the major flaws like poor data standardisation and data quality flaw.

When blockchain is used for sharing a patient's record, the question of trust will not stand any more. Patients would no longer need to coordinate the frustrating task of gathering their records from different service providers to share with their new specialist. Just adding the new specialist to the chain will solve the problem. Thus the new member can access the same data as everyone else.

It is recommended that,healthcare organizations would need to limit the number of authorized participants in a single blockchain to a patient, her care team, and her approved family members.

### Conclusion

The major difficulty in implementing blockchain in healthcare sector is that nobody quite sure about the implementation, how to deal with current privacy regulations like HIPAA, or which organization will be prepare to try such a different way of dealing health data.

A few early leaders in the healthcare sector are emerging, like Gem, GuardTime, and Factor. They are active in bringing blockchain to the industry. But still the healthcare system is at the very beginning of understanding how such a scheme would work or what it could provide to patients. To finalize blockchain-based infrastructure may take years to mature.
