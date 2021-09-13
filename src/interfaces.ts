export enum SUBMISSION_FORMATS {
  JWT = "jwt",
  JWT_VerifiableCredential = "jwt_vc",
  JWT_VerifiablePresentation = "jwt_vp",
  LinkedDataProof = "ldp",
  LinkedDataProof_VerifiableCredential = "ldp_vc",
  LinkedDataProof_VerifiablePresentation = "ldp_vp",
}

export interface IInputFilter {
  type: string;
}

export interface IInputField {
  path: string[];
  filter: IInputFilter;
}

export interface IInputConstraint {
  fields: IInputField[];
}

export interface IInputDescriptor {
  id: string;
  name: string;
  schema: string;
  constraints: IInputConstraint;
}

export interface IDIFPresentationExchangeDefinition {
  id: string;
  frame: object;
  input_descriptors: IInputDescriptor[];
}

export interface IDescriptor {
  id: string;
  path: string;
  path_nested?: IDescriptor;
  format: SUBMISSION_FORMATS;
}

export interface IPresentationSubmission {
  id: string;
  definition_id: string;
  descriptor_map: IDescriptor[];
}

export interface IDIFPresentationExchangeSubmission {
  presentation_submission: IPresentationSubmission;
  [x: string]: any;
}
