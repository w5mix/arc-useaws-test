@app
arc-useaws-test

@http
get /

@aws
# profile default
region us-west-2
architecture arm64

@tables
core
  pk *string
  sk **string
  ttl TTL
  PointInTimeRecovery true