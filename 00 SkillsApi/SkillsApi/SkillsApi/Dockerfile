FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 2108
EXPOSE 44310

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY SkillsApi/SkillsApi.csproj SkillsApi/
RUN dotnet restore SkillsApi/SkillsApi.csproj
COPY . .
WORKDIR /src/SkillsApi
RUN dotnet build SkillsApi.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish SkillsApi.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SkillsApi.dll"]
