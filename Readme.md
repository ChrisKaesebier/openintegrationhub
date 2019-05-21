<p align="center">
  <img src="https://github.com/openintegrationhub/openintegrationhub/blob/deployOnNewNamespace/Assets/medium-oih-einzeilig-zentriert.jpg" alt="Sublime's custom image" width="400"/>
</p>

[![CircleCI](https://circleci.com/gh/openintegrationhub/openintegrationhub/tree/master.svg?style=svg)](https://circleci.com/gh/openintegrationhub/openintegrationhub/tree/master)

The revolution in data synchronization — the Open Integration Hub enables simple data synchronization between any software applications and thus accelerates digitalisation.

Visit the official [Open Integration Hub homepage](https://www.openintegrationhub.org/)

# Introduction

The purpose of the Open Integration Hub is to enhance businesses by simplifying integration. Traditional integration means development and maintenance of multiple connections.
Open Integration Hub requires only a single connection to the framework.

- [Introduction](#introduction)
  - [OIH Microservices](#oih-microservices)
    - [Installation](#installation)
    - [Audit Log](#audit-log)
    - [Component Orchestrator](#component-orchestrator)
    - [Flow Respository](#flow-respository)
    - [IAM](#iam)
    - [Meta Data Repository](#meta-data-repository)
    - [Scheduler](#scheduler)
    - [Secret Service](#secret-service)
    - [Webhooks](#webhooks)
  - [Service Collaboration](#service-collaboration)
  - [Docs](#docs)
  - [Contribution](#contribution)
    - [Code of Conduct](#code-of-conduct)

## OIH Microservices

Standalone platform that is based on a microservice architecure. In the following a short description of the services is provided. 

### Installation

As the Open Integration Hub is still in development it can not be run as a whole right now.
For further information on how to install and/or run a specific service please have a look at the service folders.

A description how to test the platform will follow soon.

### Audit Log

The OIH `Audit Log` serves to receive, store, and return logging information about important user actions and system events. Other OIH Microservices can generate audit messages and pass them on to the Audit Log via the message and event bus or a simple HTTP POST request. For further information see: [audit log](services/audit-log) and [audit-log docs](docs/services/AuditLog).

### Component Orchestrator

The `component orchestrator` orchestrates flow lifecycle. It creates queues in RabbitMQ and manages Docker containers (deploy/stop/remove) for each flow node whenever a flow is created, stopped or removed.
For further information see: [component orchestrator service](services/component-orchestrator).

### Flow Respository

The `flow repository` is responsible for storing, retrieving and updating the OIH integration flows. 
For further information see: [flow repository](services/integration-content-repository) and [flow repository docs](docs/services/FlowRepository.md).

### IAM

The `IAM` (Identity and Access Management) provides token or OpenID-Connect based Authentication, Authorization and User management as a service.
For further information see: [IAM](services/iam) and [IAM docs](docs/services/IAM).

### Meta Data Repository

The `meta data repository` is responsible for storing domains and their master data models. The models stored within this service are consulted for different tasks such as data validation. The meta models are also used by the transformer to map the incoming data onto the Open Integration Hub standard. For further information see: [meta data repository](services/meta-data-repository) and [meta data repository docs](docs/services/MetaDataRepository.md).

### Scheduler

The `scheduler` service schedules integration flows for execution. For further information see: [scheduler](services/scheduler).

### Secret Service

This `secret-service` is used to store and access securely client/user credentials. For further information see: [secret service](services/secret-service).

### Webhooks

The `Webhooks` service receives http calls and passes messages to execution. For further information see: [webhooks](services/communication-router).

## Service Collaboration

The service collaboration is based on the [event collaboration](https://martinfowler.com/eaaDev/EventCollaboration.html) concept. We use RabbitMQ as our broker which supports [several protocols](https://www.rabbitmq.com/protocols.html).
A published event is received by several interested services. There may exist several running instances of a service at the same time but the event must only be sent to one instance of each service that is interested. A queue will be created for each kind of service.

For further information on service collabortion in OIH and further examples please see: [service collaboration overview](docs/ServiceCollaborationOverview.md).

## Docs

To find additional high level information about the architecture of the Open Integration Hub and functionalities of the microservices please visit the [documentation](docs).

## Contribution

Before you contribute please have a look at our [contribution guidelines](CONTRIBUTING.md).

### Code of Conduct

To see how members of the community are expected to behave, please read the [code of conduct](CODE_OF_CONDUCT.md). We apply the code of conduct defined by the Contributor Covenant, which is used across many open source projects, such as [NodeJS](https://github.com/nodejs/node), [Atom](https://github.com/atom/atom) and [Kubernetes](https://github.com/kubernetes/kubernetes).
