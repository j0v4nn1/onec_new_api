import { Schema, model } from 'mongoose';

type Provider = {
  name: string;
  taxid: number;
  crr: number;
  registered: string;
  documents: {
    _id: string;
    name: string;
  };
};

const ProviderSchema = new Schema<Provider>({
  name: {
    type: String,
    required: true,
  },
  taxid: {
    type: Number,
    required: true,
  },
  crr: {
    type: Number,
    required: true,
  },
  registered: {
    type: String,
    required: true,
  },
  documents: {
    type: [Object],
  },
});

export default model<Provider>('provider', ProviderSchema);
