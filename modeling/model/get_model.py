import torch.nn as nn
from typing import Dict, Any

import modeling.model as models


def get_models(config: Dict[str, Any]) -> nn.Module:
    if config["project"] == "SimpleMCN":
        model_config = config["arch"]["args"]
        model = getattr(models, "SimpleMCN")()

    elif config["arch"]["type"] == "NewMF":
        model_config = config["arch"]["args"]
        model = getattr(models, config["arch"]["type"])(
            model_config["n_items"], model_config["n_factors"]
        )
    elif config["arch"]["type"] == "MCN":
        model_config = config["arch"]["args"]
        model = getattr(models, config["arch"]["type"])(
            embed_size=model_config["embed_size"],
            need_rep=model_config["need_rep"],
            vocabulary=None,
            vse_off=model_config["vse_off"],
            pe_off=model_config["pe_off"],
            mlp_layers=model_config["mlp_layers"],
            conv_feats=model_config["conv_feats"],
            pretrained=model_config["pretrained"],
            resnet_layer_num=model_config["resnet_layer_num"],
        )
    else:
        raise NotImplementedError
    return model
