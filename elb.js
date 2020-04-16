var elbjson={{
  "version": "2.0",
  "metadata": {
    "apiVersion": "2015-12-01",
    "endpointPrefix": "elasticloadbalancing",
    "protocol": "query",
    "serviceAbbreviation": "Elastic Load Balancing v2",
    "serviceFullName": "Elastic Load Balancing",
    "serviceId": "Elastic Load Balancing v2",
    "signatureVersion": "v4",
    "uid": "elasticloadbalancingv2-2015-12-01",
    "xmlNamespace": "http://elasticloadbalancing.amazonaws.com/doc/2015-12-01/"
  },
  "operations": {
    "AddListenerCertificates": {
      "input": {
        "type": "structure",
        "required": [
          "ListenerArn",
          "Certificates"
        ],
        "members": {
          "ListenerArn": {},
          "Certificates": {
            "shape": "S3"
          }
        }
      },
      "output": {
        "resultWrapper": "AddListenerCertificatesResult",
        "type": "structure",
        "members": {
          "Certificates": {
            "shape": "S3"
          }
        }
      }
    },
    "AddTags": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArns",
          "Tags"
        ],
        "members": {
          "ResourceArns": {
            "shape": "S9"
          },
          "Tags": {
            "shape": "Sb"
          }
        }
      },
      "output": {
        "resultWrapper": "AddTagsResult",
        "type": "structure",
        "members": {}
      }
    },
    "CreateListener": {
      "input": {
        "type": "structure",
        "required": [
          "LoadBalancerArn",
          "Protocol",
          "Port",
          "DefaultActions"
        ],
        "members": {
          "LoadBalancerArn": {},
          "Protocol": {},
          "Port": {
            "type": "integer"
          },
          "SslPolicy": {},
          "Certificates": {
            "shape": "S3"
          },
          "DefaultActions": {
            "shape": "Sl"
          }
        }
      },
      "output": {
        "resultWrapper": "CreateListenerResult",
        "type": "structure",
        "members": {
          "Listeners": {
            "shape": "S1z"
          }
        }
      }
    },
    "CreateLoadBalancer": {
      "input": {
        "type": "structure",
        "required": [
          "Name"
        ],
        "members": {
          "Name": {},
          "Subnets": {
            "shape": "S23"
          },
          "SubnetMappings": {
            "shape": "S25"
          },
          "SecurityGroups": {
            "shape": "S29"
          },
          "Scheme": {},
          "Tags": {
            "shape": "Sb"
          },
          "Type": {},
          "IpAddressType": {}
        }
      },
      "output": {
        "resultWrapper": "CreateLoadBalancerResult",
        "type": "structure",
        "members": {
          "LoadBalancers": {
            "shape": "S2f"
          }
        }
      }
    },
    "CreateRule": {
      "input": {
        "type": "structure",
        "required": [
          "ListenerArn",
          "Conditions",
          "Priority",
          "Actions"
        ],
        "members": {
          "ListenerArn": {},
          "Conditions": {
            "shape": "S2v"
          },
          "Priority": {
            "type": "integer"
          },
          "Actions": {
            "shape": "Sl"
          }
        }
      },
      "output": {
        "resultWrapper": "CreateRuleResult",
        "type": "structure",
        "members": {
          "Rules": {
            "shape": "S3b"
          }
        }
      }
    },
    "CreateTargetGroup": {
      "input": {
        "type": "structure",
        "required": [
          "Name"
        ],
        "members": {
          "Name": {},
          "Protocol": {},
          "Port": {
            "type": "integer"
          },
          "VpcId": {},
          "HealthCheckProtocol": {},
          "HealthCheckPort": {},
          "HealthCheckEnabled": {
            "type": "boolean"
          },
          "HealthCheckPath": {},
          "HealthCheckIntervalSeconds": {
            "type": "integer"
          },
          "HealthCheckTimeoutSeconds": {
            "type": "integer"
          },
          "HealthyThresholdCount": {
            "type": "integer"
          },
          "UnhealthyThresholdCount": {
            "type": "integer"
          },
          "Matcher": {
            "shape": "S3o"
          },
          "TargetType": {}
        }
      },
      "output": {
        "resultWrapper": "CreateTargetGroupResult",
        "type": "structure",
        "members": {
          "TargetGroups": {
            "shape": "S3s"
          }
        }
      }
    },
    "DeleteListener": {
      "input": {
        "type": "structure",
        "required": [
          "ListenerArn"
        ],
        "members": {
          "ListenerArn": {}
        }
      },
      "output": {
        "resultWrapper": "DeleteListenerResult",
        "type": "structure",
        "members": {}
      }
    },
    "DeleteLoadBalancer": {
      "input": {
        "type": "structure",
        "required": [
          "LoadBalancerArn"
        ],
        "members": {
          "LoadBalancerArn": {}
        }
      },
      "output": {
        "resultWrapper": "DeleteLoadBalancerResult",
        "type": "structure",
        "members": {}
      }
    },
    "DeleteRule": {
      "input": {
        "type": "structure",
        "required": [
          "RuleArn"
        ],
        "members": {
          "RuleArn": {}
        }
      },
      "output": {
        "resultWrapper": "DeleteRuleResult",
        "type": "structure",
        "members": {}
      }
    },
    "DeleteTargetGroup": {
      "input": {
        "type": "structure",
        "required": [
          "TargetGroupArn"
        ],
        "members": {
          "TargetGroupArn": {}
        }
      },
      "output": {
        "resultWrapper": "DeleteTargetGroupResult",
        "type": "structure",
        "members": {}
      }
    },
    "DeregisterTargets": {
      "input": {
        "type": "structure",
        "required": [
          "TargetGroupArn",
          "Targets"
        ],
        "members": {
          "TargetGroupArn": {},
          "Targets": {
            "shape": "S44"
          }
        }
      },
      "output": {
        "resultWrapper": "DeregisterTargetsResult",
        "type": "structure",
        "members": {}
      }
    },
    "DescribeAccountLimits": {
      "input": {
        "type": "structure",
        "members": {
          "Marker": {},
          "PageSize": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "DescribeAccountLimitsResult",
        "type": "structure",
        "members": {
          "Limits": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Name": {},
                "Max": {}
              }
            }
          },
          "NextMarker": {}
        }
      }
    },
    "DescribeListenerCertificates": {
      "input": {
        "type": "structure",
        "required": [
          "ListenerArn"
        ],
        "members": {
          "ListenerArn": {},
          "Marker": {},
          "PageSize": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "DescribeListenerCertificatesResult",
        "type": "structure",
        "members": {
          "Certificates": {
            "shape": "S3"
          },
          "NextMarker": {}
        }
      }
    },
    "DescribeListeners": {
      "input": {
        "type": "structure",
        "members": {
          "LoadBalancerArn": {},
          "ListenerArns": {
            "type": "list",
            "member": {}
          },
          "Marker": {},
          "PageSize": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "DescribeListenersResult",
        "type": "structure",
        "members": {
          "Listeners": {
            "shape": "S1z"
          },
          "NextMarker": {}
        }
      }
    },
    "DescribeLoadBalancerAttributes": {
      "input": {
        "type": "structure",
        "required": [
          "LoadBalancerArn"
        ],
        "members": {
          "LoadBalancerArn": {}
        }
      },
      "output": {
        "resultWrapper": "DescribeLoadBalancerAttributesResult",
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "S4n"
          }
        }
      }
    },
    "DescribeLoadBalancers": {
      "input": {
        "type": "structure",
        "members": {
          "LoadBalancerArns": {
            "shape": "S3u"
          },
          "Names": {
            "type": "list",
            "member": {}
          },
          "Marker": {},
          "PageSize": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "DescribeLoadBalancersResult",
        "type": "structure",
        "members": {
          "LoadBalancers": {
            "shape": "S2f"
          },
          "NextMarker": {}
        }
      }
    },
    "DescribeRules": {
      "input": {
        "type": "structure",
        "members": {
          "ListenerArn": {},
          "RuleArns": {
            "type": "list",
            "member": {}
          },
          "Marker": {},
          "PageSize": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "DescribeRulesResult",
        "type": "structure",
        "members": {
          "Rules": {
            "shape": "S3b"
          },
          "NextMarker": {}
        }
      }
    },
    "DescribeSSLPolicies": {
      "input": {
        "type": "structure",
        "members": {
          "Names": {
            "type": "list",
            "member": {}
          },
          "Marker": {},
          "PageSize": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "DescribeSSLPoliciesResult",
        "type": "structure",
        "members": {
          "SslPolicies": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "SslProtocols": {
                  "type": "list",
                  "member": {}
                },
                "Ciphers": {
                  "type": "list",
                  "member": {
                    "type": "structure",
                    "members": {
                      "Name": {},
                      "Priority": {
                        "type": "integer"
                      }
                    }
                  }
                },
                "Name": {}
              }
            }
          },
          "NextMarker": {}
        }
      }
    },
    "DescribeTags": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArns"
        ],
        "members": {
          "ResourceArns": {
            "shape": "S9"
          }
        }
      },
      "output": {
        "resultWrapper": "DescribeTagsResult",
        "type": "structure",
        "members": {
          "TagDescriptions": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "ResourceArn": {},
                "Tags": {
                  "shape": "Sb"
                }
              }
            }
          }
        }
      }
    },
    "DescribeTargetGroupAttributes": {
      "input": {
        "type": "structure",
        "required": [
          "TargetGroupArn"
        ],
        "members": {
          "TargetGroupArn": {}
        }
      },
      "output": {
        "resultWrapper": "DescribeTargetGroupAttributesResult",
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "S5e"
          }
        }
      }
    },
    "DescribeTargetGroups": {
      "input": {
        "type": "structure",
        "members": {
          "LoadBalancerArn": {},
          "TargetGroupArns": {
            "type": "list",
            "member": {}
          },
          "Names": {
            "type": "list",
            "member": {}
          },
          "Marker": {},
          "PageSize": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "DescribeTargetGroupsResult",
        "type": "structure",
        "members": {
          "TargetGroups": {
            "shape": "S3s"
          },
          "NextMarker": {}
        }
      }
    },
    "DescribeTargetHealth": {
      "input": {
        "type": "structure",
        "required": [
          "TargetGroupArn"
        ],
        "members": {
          "TargetGroupArn": {},
          "Targets": {
            "shape": "S44"
          }
        }
      },
      "output": {
        "resultWrapper": "DescribeTargetHealthResult",
        "type": "structure",
        "members": {
          "TargetHealthDescriptions": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "Target": {
                  "shape": "S45"
                },
                "HealthCheckPort": {},
                "TargetHealth": {
                  "type": "structure",
                  "members": {
                    "State": {},
                    "Reason": {},
                    "Description": {}
                  }
                }
              }
            }
          }
        }
      }
    },
    "ModifyListener": {
      "input": {
        "type": "structure",
        "required": [
          "ListenerArn"
        ],
        "members": {
          "ListenerArn": {},
          "Port": {
            "type": "integer"
          },
          "Protocol": {},
          "SslPolicy": {},
          "Certificates": {
            "shape": "S3"
          },
          "DefaultActions": {
            "shape": "Sl"
          }
        }
      },
      "output": {
        "resultWrapper": "ModifyListenerResult",
        "type": "structure",
        "members": {
          "Listeners": {
            "shape": "S1z"
          }
        }
      }
    },
    "ModifyLoadBalancerAttributes": {
      "input": {
        "type": "structure",
        "required": [
          "LoadBalancerArn",
          "Attributes"
        ],
        "members": {
          "LoadBalancerArn": {},
          "Attributes": {
            "shape": "S4n"
          }
        }
      },
      "output": {
        "resultWrapper": "ModifyLoadBalancerAttributesResult",
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "S4n"
          }
        }
      }
    },
    "ModifyRule": {
      "input": {
        "type": "structure",
        "required": [
          "RuleArn"
        ],
        "members": {
          "RuleArn": {},
          "Conditions": {
            "shape": "S2v"
          },
          "Actions": {
            "shape": "Sl"
          }
        }
      },
      "output": {
        "resultWrapper": "ModifyRuleResult",
        "type": "structure",
        "members": {
          "Rules": {
            "shape": "S3b"
          }
        }
      }
    },
    "ModifyTargetGroup": {
      "input": {
        "type": "structure",
        "required": [
          "TargetGroupArn"
        ],
        "members": {
          "TargetGroupArn": {},
          "HealthCheckProtocol": {},
          "HealthCheckPort": {},
          "HealthCheckPath": {},
          "HealthCheckEnabled": {
            "type": "boolean"
          },
          "HealthCheckIntervalSeconds": {
            "type": "integer"
          },
          "HealthCheckTimeoutSeconds": {
            "type": "integer"
          },
          "HealthyThresholdCount": {
            "type": "integer"
          },
          "UnhealthyThresholdCount": {
            "type": "integer"
          },
          "Matcher": {
            "shape": "S3o"
          }
        }
      },
      "output": {
        "resultWrapper": "ModifyTargetGroupResult",
        "type": "structure",
        "members": {
          "TargetGroups": {
            "shape": "S3s"
          }
        }
      }
    },
    "ModifyTargetGroupAttributes": {
      "input": {
        "type": "structure",
        "required": [
          "TargetGroupArn",
          "Attributes"
        ],
        "members": {
          "TargetGroupArn": {},
          "Attributes": {
            "shape": "S5e"
          }
        }
      },
      "output": {
        "resultWrapper": "ModifyTargetGroupAttributesResult",
        "type": "structure",
        "members": {
          "Attributes": {
            "shape": "S5e"
          }
        }
      }
    },
    "RegisterTargets": {
      "input": {
        "type": "structure",
        "required": [
          "TargetGroupArn",
          "Targets"
        ],
        "members": {
          "TargetGroupArn": {},
          "Targets": {
            "shape": "S44"
          }
        }
      },
      "output": {
        "resultWrapper": "RegisterTargetsResult",
        "type": "structure",
        "members": {}
      }
    },
    "RemoveListenerCertificates": {
      "input": {
        "type": "structure",
        "required": [
          "ListenerArn",
          "Certificates"
        ],
        "members": {
          "ListenerArn": {},
          "Certificates": {
            "shape": "S3"
          }
        }
      },
      "output": {
        "resultWrapper": "RemoveListenerCertificatesResult",
        "type": "structure",
        "members": {}
      }
    },
    "RemoveTags": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArns",
          "TagKeys"
        ],
        "members": {
          "ResourceArns": {
            "shape": "S9"
          },
          "TagKeys": {
            "type": "list",
            "member": {}
          }
        }
      },
      "output": {
        "resultWrapper": "RemoveTagsResult",
        "type": "structure",
        "members": {}
      }
    },
    "SetIpAddressType": {
      "input": {
        "type": "structure",
        "required": [
          "LoadBalancerArn",
          "IpAddressType"
        ],
        "members": {
          "LoadBalancerArn": {},
          "IpAddressType": {}
        }
      },
      "output": {
        "resultWrapper": "SetIpAddressTypeResult",
        "type": "structure",
        "members": {
          "IpAddressType": {}
        }
      }
    },
    "SetRulePriorities": {
      "input": {
        "type": "structure",
        "required": [
          "RulePriorities"
        ],
        "members": {
          "RulePriorities": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "RuleArn": {},
                "Priority": {
                  "type": "integer"
                }
              }
            }
          }
        }
      },
      "output": {
        "resultWrapper": "SetRulePrioritiesResult",
        "type": "structure",
        "members": {
          "Rules": {
            "shape": "S3b"
          }
        }
      }
    },
    "SetSecurityGroups": {
      "input": {
        "type": "structure",
        "required": [
          "LoadBalancerArn",
          "SecurityGroups"
        ],
        "members": {
          "LoadBalancerArn": {},
          "SecurityGroups": {
            "shape": "S29"
          }
        }
      },
      "output": {
        "resultWrapper": "SetSecurityGroupsResult",
        "type": "structure",
        "members": {
          "SecurityGroupIds": {
            "shape": "S29"
          }
        }
      }
    },
    "SetSubnets": {
      "input": {
        "type": "structure",
        "required": [
          "LoadBalancerArn"
        ],
        "members": {
          "LoadBalancerArn": {},
          "Subnets": {
            "shape": "S23"
          },
          "SubnetMappings": {
            "shape": "S25"
          }
        }
      },
      "output": {
        "resultWrapper": "SetSubnetsResult",
        "type": "structure",
        "members": {
          "AvailabilityZones": {
            "shape": "S2o"
          }
        }
      }
    }
  },
  "shapes": {
    "S3": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "CertificateArn": {},
          "IsDefault": {
            "type": "boolean"
          }
        }
      }
    },
    "S9": {
      "type": "list",
      "member": {}
    },
    "Sb": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Key"
        ],
        "members": {
          "Key": {},
          "Value": {}
        }
      }
    },
    "Sl": {
      "type": "list",
      "member": {
        "type": "structure",
        "required": [
          "Type"
        ],
        "members": {
          "Type": {},
          "TargetGroupArn": {},
          "AuthenticateOidcConfig": {
            "type": "structure",
            "required": [
              "Issuer",
              "AuthorizationEndpoint",
              "TokenEndpoint",
              "UserInfoEndpoint",
              "ClientId"
            ],
            "members": {
              "Issuer": {},
              "AuthorizationEndpoint": {},
              "TokenEndpoint": {},
              "UserInfoEndpoint": {},
              "ClientId": {},
              "ClientSecret": {},
              "SessionCookieName": {},
              "Scope": {},
              "SessionTimeout": {
                "type": "long"
              },
              "AuthenticationRequestExtraParams": {
                "type": "map",
                "key": {},
                "value": {}
              },
              "OnUnauthenticatedRequest": {},
              "UseExistingClientSecret": {
                "type": "boolean"
              }
            }
          },
          "AuthenticateCognitoConfig": {
            "type": "structure",
            "required": [
              "UserPoolArn",
              "UserPoolClientId",
              "UserPoolDomain"
            ],
            "members": {
              "UserPoolArn": {},
              "UserPoolClientId": {},
              "UserPoolDomain": {},
              "SessionCookieName": {},
              "Scope": {},
              "SessionTimeout": {
                "type": "long"
              },
              "AuthenticationRequestExtraParams": {
                "type": "map",
                "key": {},
                "value": {}
              },
              "OnUnauthenticatedRequest": {}
            }
          },
          "Order": {
            "type": "integer"
          },
          "RedirectConfig": {
            "type": "structure",
            "required": [
              "StatusCode"
            ],
            "members": {
              "Protocol": {},
              "Port": {},
              "Host": {},
              "Path": {},
              "Query": {},
              "StatusCode": {}
            }
          },
          "FixedResponseConfig": {
            "type": "structure",
            "required": [
              "StatusCode"
            ],
            "members": {
              "MessageBody": {},
              "StatusCode": {},
              "ContentType": {}
            }
          },
          "ForwardConfig": {
            "type": "structure",
            "members": {
              "TargetGroups": {
                "type": "list",
                "member": {
                  "type": "structure",
                  "members": {
                    "TargetGroupArn": {},
                    "Weight": {
                      "type": "integer"
                    }
                  }
                }
              },
              "TargetGroupStickinessConfig": {
                "type": "structure",
                "members": {
                  "Enabled": {
                    "type": "boolean"
                  },
                  "DurationSeconds": {
                    "type": "integer"
                  }
                }
              }
            }
          }
        }
      }
    },
    "S1z": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "ListenerArn": {},
          "LoadBalancerArn": {},
          "Port": {
            "type": "integer"
          },
          "Protocol": {},
          "Certificates": {
            "shape": "S3"
          },
          "SslPolicy": {},
          "DefaultActions": {
            "shape": "Sl"
          }
        }
      }
    },
    "S23": {
      "type": "list",
      "member": {}
    },
    "S25": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "SubnetId": {},
          "AllocationId": {},
          "PrivateIPv4Address": {}
        }
      }
    },
    "S29": {
      "type": "list",
      "member": {}
    },
    "S2f": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "LoadBalancerArn": {},
          "DNSName": {},
          "CanonicalHostedZoneId": {},
          "CreatedTime": {
            "type": "timestamp"
          },
          "LoadBalancerName": {},
          "Scheme": {},
          "VpcId": {},
          "State": {
            "type": "structure",
            "members": {
              "Code": {},
              "Reason": {}
            }
          },
          "Type": {},
          "AvailabilityZones": {
            "shape": "S2o"
          },
          "SecurityGroups": {
            "shape": "S29"
          },
          "IpAddressType": {}
        }
      }
    },
    "S2o": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "ZoneName": {},
          "SubnetId": {},
          "LoadBalancerAddresses": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "IpAddress": {},
                "AllocationId": {},
                "PrivateIPv4Address": {}
              }
            }
          }
        }
      }
    },
    "S2v": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Field": {},
          "Values": {
            "shape": "S2y"
          },
          "HostHeaderConfig": {
            "type": "structure",
            "members": {
              "Values": {
                "shape": "S2y"
              }
            }
          },
          "PathPatternConfig": {
            "type": "structure",
            "members": {
              "Values": {
                "shape": "S2y"
              }
            }
          },
          "HttpHeaderConfig": {
            "type": "structure",
            "members": {
              "HttpHeaderName": {},
              "Values": {
                "shape": "S2y"
              }
            }
          },
          "QueryStringConfig": {
            "type": "structure",
            "members": {
              "Values": {
                "type": "list",
                "member": {
                  "type": "structure",
                  "members": {
                    "Key": {},
                    "Value": {}
                  }
                }
              }
            }
          },
          "HttpRequestMethodConfig": {
            "type": "structure",
            "members": {
              "Values": {
                "shape": "S2y"
              }
            }
          },
          "SourceIpConfig": {
            "type": "structure",
            "members": {
              "Values": {
                "shape": "S2y"
              }
            }
          }
        }
      }
    },
    "S2y": {
      "type": "list",
      "member": {}
    },
    "S3b": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "RuleArn": {},
          "Priority": {},
          "Conditions": {
            "shape": "S2v"
          },
          "Actions": {
            "shape": "Sl"
          },
          "IsDefault": {
            "type": "boolean"
          }
        }
      }
    },
    "S3o": {
      "type": "structure",
      "required": [
        "HttpCode"
      ],
      "members": {
        "HttpCode": {}
      }
    },
    "S3s": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "TargetGroupArn": {},
          "TargetGroupName": {},
          "Protocol": {},
          "Port": {
            "type": "integer"
          },
          "VpcId": {},
          "HealthCheckProtocol": {},
          "HealthCheckPort": {},
          "HealthCheckEnabled": {
            "type": "boolean"
          },
          "HealthCheckIntervalSeconds": {
            "type": "integer"
          },
          "HealthCheckTimeoutSeconds": {
            "type": "integer"
          },
          "HealthyThresholdCount": {
            "type": "integer"
          },
          "UnhealthyThresholdCount": {
            "type": "integer"
          },
          "HealthCheckPath": {},
          "Matcher": {
            "shape": "S3o"
          },
          "LoadBalancerArns": {
            "shape": "S3u"
          },
          "TargetType": {}
        }
      }
    },
    "S3u": {
      "type": "list",
      "member": {}
    },
    "S44": {
      "type": "list",
      "member": {
        "shape": "S45"
      }
    },
    "S45": {
      "type": "structure",
      "required": [
        "Id"
      ],
      "members": {
        "Id": {},
        "Port": {
          "type": "integer"
        },
        "AvailabilityZone": {}
      }
    },
    "S4n": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Key": {},
          "Value": {}
        }
      }
    },
    "S5e": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "Key": {},
          "Value": {}
        }
      }
    }
  }
}

}
