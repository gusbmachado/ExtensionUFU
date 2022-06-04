interface HttpResponse {
  status: number;
  statusText: string;
}

export interface LicHttpResponse<DataType> {
  success: boolean;
  message?: string;
  data?: DataType;
  response?: HttpResponse;
}
